<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>QuickVoiceVideoConverter</h1>
        <h2>画像ファイルと音声ファイルを選択するとTwitter投稿用の動画に変換して出力します。</h2>
        <h3>動画フォーマットの仕様上1px画像が削られる場合があります。</h3>
      </v-col>
      <v-col cols="12">
        <v-file-input
            :disabled="isProsessing"
            counter
            small-chips
            show-size
            truncate-length="15"
            accept="image/*"
            @change="imageUpdate"
        ></v-file-input>
        <v-file-input
            :disabled="isProsessing"
            counter
            small-chips
            show-size
            truncate-length="15"
            accept="audio/*"
            @change="musicUpdate"
        ></v-file-input>
      </v-col>

      <v-col>
        <v-btn
            :disabled="isProsessing"
            class="pa-6"
            color="primary"
            width="100%"
            height="40px"
            @click="convertFunc"
        >Convert
        </v-btn>
        <v-divider class="pa-6"></v-divider>
        <v-textarea
            filled
            name="input-7-4"
            :value="logText"
        ></v-textarea>
        <v-btn
            href="https://github.com/FiveZett/quick_voicevideo_converter"
            target="_blank"
            text
        >
          <span class="mr-2">Repository Page</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as Ffmpeg from "@ffmpeg/ffmpeg";

const ffmpeg = Ffmpeg.createFFmpeg({
  log: true
})
let targetSound = {}
let targetImage = {}

export default {
  name: 'HelloWorld',


  data: () => ({
    logText: "",
    isProsessing: false
  }),
  methods: {
    musicUpdate(fileData) {
      targetSound = fileData
    }, imageUpdate(fileData) {
      targetImage = fileData
    },
    async convertFunc() {
      this.isProsessing = true
      if (!ffmpeg.isLoaded())
        await ffmpeg.load()
      ffmpeg.setLogger(({message}) => {
        this.logText = message + "\n" + this.logText
      })
      const imageData = await new Promise((res) => {
        const loader = new FileReader();
        loader.onload = () => {
          const image = new Image()
          image.src = loader.result
          image.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = Math.max(2, image.naturalWidth - image.naturalWidth % 2)
            canvas.height = Math.max(2, image.naturalHeight - image.naturalHeight % 2)
            canvas.getContext('2d').drawImage(image, 0, 0)
            const data = canvas.toDataURL('image/png')
            res(data)
          }
        }
        loader.readAsDataURL(targetImage);
      })
      ffmpeg.FS('writeFile', targetSound.name, await Ffmpeg.fetchFile(targetSound));
      ffmpeg.FS('writeFile', targetImage.name, await Ffmpeg.fetchFile(imageData));

      const distFilename = Date.now() + ".mp4"
      await ffmpeg.run("-r", "1", "-i", targetImage.name, "-i", targetSound.name, "-pix_fmt", "yuv420p", distFilename);
      const distVideo = ffmpeg.FS('readFile', distFilename);
      const aTag = document.createElement("a")
      aTag.href = URL.createObjectURL(new Blob([distVideo.buffer], {type: 'video/mp4'}))
      aTag.download = distFilename
      aTag.click()
      this.isProsessing = false
    }
  }
}
</script>
