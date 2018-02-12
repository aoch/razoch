import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpackNodeExternals from 'webpack-node-externals'

const clientConfig = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './source/client/application/index.jsx'
  ],
  output: {
    path: path.join(__dirname, '..', 'build', 'client'),
    filename: './client.js'
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
