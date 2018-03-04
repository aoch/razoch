import path from 'path'
import webpack from 'webpack'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpackNodeExternals from 'webpack-node-externals'

const clientConfig = {
  entry: {
    client: ['./source/client/application/index.jsx'],
    vendor: ['react', 'whatwg-fetch', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'redux-saga', 'redux-observable', 'rxjs', 'ramda']
  },
  output: {
    path: path.resolve(__dirname, '..', 'build', 'client'),
    filename: '[name].[chunkhash].min.js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: [/node_modules/, /build/, /enzyme/, /webpack/],
        use: 'babel-loader'
      },
      {
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        test: /\.s?css/
      },
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    new ExtractTextPlugin('./client.[contenthash].min.css'),
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: './source/client/application/index.html'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ],
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  }
}

const serverConfig = {
  entry: {
    server: ['./source/server/server.js'],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build', 'server'),
    filename: './[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js?)$/,
        exclude: [/node_modules/, /build/, /enzyme/, /webpack/],
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BUILD_FOLDER: path.resolve(__dirname, '..', 'build')
    })
  ],
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
  externals: [webpackNodeExternals()]
}

export default [clientConfig, serverConfig]
