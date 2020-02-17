const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './src/styles/amp.scss'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              context: './src/css/',
              outputPath: 'css/',
              publicPath: '../'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // only enable hot in development
          //     hmr: process.env.NODE_ENV === 'development',
          //     // if hmr does not work, this is a forceful method.
          //     reloadAll: true,
          //   },
          // },
          // 'css-loader',
          // 'postcss-loader',
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     sassOptions: {
          //       includePaths: [path.resolve(__dirname, './src/styles/amp.scss'), path.resolve(__dirname, './src/styles/index.scss')],
          //     },
          //   },
          // }
        ],
      },
    ],
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     // Options similar to the same options in webpackOptions.output
  //     // both options are optional
  //     filename: '[name].css',
  //     chunkFilename: '[id].css',
  //   }),
  // ],
};