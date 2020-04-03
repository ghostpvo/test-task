// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/variables.scss";`
      }
    }
  }
}
