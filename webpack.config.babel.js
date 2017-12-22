import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const PROD = JSON.parse(process.env.PROD_ENV || '0');

const config = {
  devtool: 'source-map',
  entry: './source/client/application.jsx',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build', 'client'),
    filename: PROD ? './bundle.min.js' : './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: [/node_modules/, /build/],
        use: 'babel-loader'
      },
      {
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        test: /\.s?css/
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('./bundle.css'),
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: './source/client/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  }
}

export default config
