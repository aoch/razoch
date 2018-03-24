import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpackNodeExternals from 'webpack-node-externals'

const { env: { BABEL_FILE, BUILD_FOLDER, SERVER_FOLDER } } = process

const babelFile = path.resolve(process.cwd(), BABEL_FILE)
const buildFolder = path.resolve(process.cwd(), BUILD_FOLDER)
const serverFolder = path.resolve(process.cwd(), SERVER_FOLDER)

const serverConfig = {
  entry: {
    'rest.server': ['./source/server/rest.server.js']
  },
  output: {
    path: serverFolder,
    filename: './[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: [/node_modules/, /build/, /config/],
        use: {
          loader: 'babel-loader',
          options: {
            extends: babelFile
          }
        }
      },
      {
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        test: /\.s?css/
      },
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BUILD_FOLDER: buildFolder
    })
  ],
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  externals: [webpackNodeExternals()]
}

export default serverConfig
