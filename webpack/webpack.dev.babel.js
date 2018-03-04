import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpackNodeExternals from 'webpack-node-externals'

const clientConfig = {
  devtool: 'source-map',
  entry: {
    client: [
      'webpack-hot-middleware/client?reload=true',
      './source/client/application/index.jsx'
    ],
    vendor: ['react', 'whatwg-fetch', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'redux-saga', 'redux-observable', 'rxjs', 'ramda']
  },
  output: {
    path: path.resolve(__dirname, '..', 'build', 'client'),
    filename: '[name].[hash].js',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    new ExtractTextPlugin('./client.[contenthash].css'),
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: './source/client/application/index.html'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
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
    filename: './[name].js'
  },
  devtool: 'source-map',
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
    }),
  ],
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
  externals: [webpackNodeExternals()]
}

export default [clientConfig, serverConfig]
