const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  publicPath: process.env.NODE_ENV === 'production'
    ? '/khatabook-client/'  // Change this to your repository name
    : '/',

  transpileDependencies: true
})
