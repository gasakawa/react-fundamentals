const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
