import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpackNodeExternals from 'webpack-node-externals'

const { env: { NODE_ENV } } = process
const rootFolder = path.resolve(__dirname, '..', '..')
const buildFolder = path.join(rootFolder, 'build', NODE_ENV)
const clientFolder = path.join(buildFolder, 'client')
const serverFolder = path.join(buildFolder, 'server')


const clientConfig = {
  devtool: 'source-map',
  entry: {
    client: [
      'webpack-hot-middleware/client?reload=true',
      './source/client/client.jsx'
    ],
    vendor: ['react', 'whatwg-fetch', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'redux-saga', 'redux-observable', 'rxjs', 'ramda']
  },
  output: {
    path: clientFolder,
    filename: '[name].js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: [/node_modules/, /build/, /configs/],
        use: 'babel-loader'
      },
      {
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        test: /\.s?css/
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('./client.css'),
    new HtmlWebpackPlugin({
      title: 'A React/Redux Playground',
      template: './source/pages/index.html'
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV })
  ],
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  }
}

const serverConfig = {
  entry: {
    'web.server': ['./source/server/web.server.js'],
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
        exclude: [/node_modules/, /build/, /configs/],
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

export default [clientConfig, serverConfig]