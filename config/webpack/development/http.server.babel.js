import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpackNodeExternals from 'webpack-node-externals'

const { env: { NODE_ENV, BABEL_FILE, BUILDS_DIR, SERVER_DIR } } = process

const babelFile = path.resolve(process.cwd(), BABEL_FILE)
const buildsDir = path.resolve(process.cwd(), BUILDS_DIR)
const serverDir = path.resolve(process.cwd(), SERVER_DIR)

const serverConfig = {
  entry: {
    'http.server': ['./source/server/http.server.js']
  },
  output: {
    path: serverDir,
    filename: './[name].js'
  },
  devtool: 'source-map',
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
      BUILD_FOLDER: buildsDir
    }),
  ],
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  externals: [webpackNodeExternals()]
}

export default serverConfig
