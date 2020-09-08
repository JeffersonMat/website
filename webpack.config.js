const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require("compression-webpack-plugin")


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      
    },    
    ]
  },
  plugins:[new CompressionPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', 'css']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public'
  }
}
