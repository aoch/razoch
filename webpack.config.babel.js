import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import path from 'path'

const config = {
  entry: './source/client/application.jsx',
  output: {
    path: path.join(__dirname, 'build', 'client'),
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /build/],
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Todos',
    template: 'source/client/index.html'
  })]
}

export default config