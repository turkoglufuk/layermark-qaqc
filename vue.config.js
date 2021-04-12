module.exports = {
  lintOnSave: false,

  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/layerexchange-api': {
        target: `https://gis.layermark.com`,
        logLevel: 'debug',
        changeOrigin: true
      }
    }
  }
}
