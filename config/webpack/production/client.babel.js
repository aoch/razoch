import path from 'path'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const { env: { NODE_ENV, CLIENT_FOLDER } } = process

const clientFolder = path.resolve(process.cwd(), CLIENT_FOLDER)

const clientConfig = {
  entry: {
    client: ['./source/client/client.jsx'],
    vendor: ['react', 'isomorphic-fetch', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'redux-saga', 'redux-observable', 'rxjs', 'react-router', 'react-router-dom', 'react-router-config']
  },
  output: {
    path: clientFolder,
    filename: '[name].[chunkhash].js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: [/node_modules/, /build/, /config/],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        test: /\.s?css/
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './source/pages/favicon.png', to: 'favicon.png' }]),
    new UglifyJSPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    new ExtractTextPlugin('./client.[contenthash].css'),
    new HtmlWebpackPlugin({
      title: 'A React/Redux Playground',
      template: './source/pages/client.html',
      filename: 'client.html'
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 1024,
      minRatio: 0.8
    })
  ],
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  }
}

export default clientConfig
