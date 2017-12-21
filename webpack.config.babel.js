import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const PROD = JSON.parse(process.env.PROD_ENV || '0');

const config = {
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
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Todos',
    template: 'source/client/index.html',
    minify: { 
      minifyJS: false,
      collapseWhitespace: true,
      preserveLineBreaks: true
    }
  })],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}

export default config
