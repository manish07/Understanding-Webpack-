const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'My Webpack template',
          template: 'admin.html',
          minify: {
              collapseWhitespace: true
          },
          hash: true
        })
      ]
};