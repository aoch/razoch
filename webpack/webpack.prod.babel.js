import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpackNodeExternals from 'webpack-node-externals'

const clientConfig = {
  entry: './source/client/application/index.jsx',
  output: {
    path: path.join(__dirname, '..', 'build', 'client'),
    filename: './client.min.js'
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
    new ExtractTextPlugin('./client.min.css'),
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
  entry: './source/server/server.js',
  output: {
    path: path.join(__dirname, '..', 'build', 'server'),
    filename: './server.min.js'
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
    })
  ],
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
  externals: [webpackNodeExternals()]
}

export default [clientConfig, serverConfig]
