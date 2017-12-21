import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const config = {
  devtool: 'source-map',
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
      },
      {
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        test: /\.s?css/
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('./bundle.css'),
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: './source/client/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  }
}

export default config
