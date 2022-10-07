const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath: './',
	transpileDependencies: [
		'vuetify'
	],
	devServer: {
		headers: {
			"Cross-Origin-Embedder-Policy": "require-corp",
			"Cross-Origin-Opener-Policy": "same-origin"
		}
	}
})
