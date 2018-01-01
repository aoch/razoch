import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { EnvironmentPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import path from 'path'

const config = {
  devtool: 'source-map',
  entry: './source/client/application/application.jsx',
  output: {
    path: path.join(__dirname, '..', 'build', 'client'),
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
    new EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      BABEL_ENV: 'development', // use 'development' unless process.env.BABEL_ENV is defined
      DEBUG: true
    }),
    new ExtractTextPlugin('./bundle.css'),
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: './source/client/application/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  }
}

export default config
