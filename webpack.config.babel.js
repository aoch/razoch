import HtmlWebpackPlugin from 'html-webpack-plugin'
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
        test: /\.(jsx?)$/,
        exclude: [/node_modules/, /build/],
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Todos',
    template: 'source/client/index.html'
  })],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}

export default config
