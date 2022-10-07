<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>QVVConverter</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://twitter.com/FiveZett"
        target="_blank"
        text
      >
        <span class="mr-2">(ゴゼ)@FiveZett</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="ma-6">
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
