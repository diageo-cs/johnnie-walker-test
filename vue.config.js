const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  //output path for build
  publicPath: process.env.NODE_ENV === 'production'
    ? '/jhDev/Dev/Diageo/_2022/06_2022/hh13-cs/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "src/scss/_variables.scss";
          @import "src/scss/_reset.scss";
          @import "src/scss/mixins/_flexbox.scss";
          @import "src/scss/_channelsight-widget.scss";
          @import "src/scss/_helpers.scss";
        `
      }
    }
  }
};