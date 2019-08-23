const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  output: { 
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    noInfo: true,
    open: true,
    // 如果你想要代理多个路径特定到同一个 target 下，你可以使用由一个或多个「具有 context 属性的对象」构成的数组
    // proxy: [{
    //   context: ['/auth', '/api'],
    //   target: 'http://localhost:3000',
    // }]
    proxy: {
      '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
      }
    }
  }
});