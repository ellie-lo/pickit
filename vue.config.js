const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pickit/' // pickit 為 repo 名稱
    : '/'
}

// module.exports = {
//   // publicPath 為 project-name，根目錄地址為上傳的網域
//   publicPath: '/pickit/'
// }
