const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: './src/index.js', 
  module: {
    noParse: /jquery/,
    rules: [
			{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/, 
        loader: "babel-loader"
			},
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
        loader: "url-loader?limit=10240&name=assets/img/[name]_[hash].[ext]",
      }
		],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
		new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
		})
	],
	resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
        '@': resolve('src')
    }
  }
};
