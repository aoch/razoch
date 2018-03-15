import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpackNodeExternals from 'webpack-node-externals'

const { env: { NODE_ENV } } = process
const rootFolder = path.resolve(__dirname, '..', '..', '..')
const buildFolder = path.join(rootFolder, 'build', NODE_ENV)
const serverFolder = path.join(buildFolder, 'server')

const serverConfig = {
  entry: {
    'rest.server': ['./source/server/rest.server.js']
  },
  output: {
    path: serverFolder,
    filename: './[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: [/node_modules/, /build/, /config/],
        use: 'babel-loader'
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
    }),
  ],
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  externals: [webpackNodeExternals()]
}

export default serverConfig