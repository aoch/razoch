import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

const { env: { NODE_ENV, BABEL_FILE, CLIENT_FOLDER } } = process

const babelFile = path.resolve(process.cwd(), BABEL_FILE)
const clientFolder = path.resolve(process.cwd(), CLIENT_FOLDER)

const clientConfig = {
  devtool: 'source-map',
  entry: {
    client: [
      'webpack-hot-middleware/client?reload=true',
      './source/client/client.jsx'
    ],
    vendor: ['react', 'whatwg-fetch', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'redux-saga', 'redux-observable', 'rxjs']
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
    new FaviconsWebpackPlugin('./source/pages/favicon.png'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('client.css'),
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

export default clientConfig
