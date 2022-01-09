/*
 * @Author: chris
 * @Date: 2022-01-04 11:13:09
 * @LastEditors: chris
 * @LastEditTime: 2022-01-06 18:32:41
 * @FilePath: \admin-v1\vue.config.js
 * @autoAdd: false
 */
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    // 配置反向代理
    proxy: {
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true, // 是否跨域
      },
    },
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
};
