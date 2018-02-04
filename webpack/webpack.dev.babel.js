import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import fs from 'fs'
import path from 'path'

const clientConfig = {
  devtool: 'source-map',
  entry: './source/client/application/application.jsx',
  output: {
    path: path.join(__dirname, '..', 'build', 'client'),
    filename: './client.js'
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
    new ExtractTextPlugin('./client.css'),
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: './source/client/application/index.html'
    })
  ],
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  }
}

const nodeModules = fs.readdirSync('node_modules')
  .filter((filePath) => !filePath.includes('.bin'))
  .map((filePath) => `commonjs ${filePath}`)

const serverConfig = {
  entry: './source/server/server.js',
  output: {
    path: path.join(__dirname, '..', 'build', 'server'),
    filename: './server.js'
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(js?)$/,
        exclude: [/node_modules/, /build/],
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BUILD_FOLDER: path.resolve(__dirname, '..', 'build')
    }),
  ],
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
  externals: [nodeModules]
}

export default [clientConfig, serverConfig]
