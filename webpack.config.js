const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    app: path.resolve(__dirname, 'src', 'index.jsx'),
  },
  output: {
    filename: 'bundle.js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
}
