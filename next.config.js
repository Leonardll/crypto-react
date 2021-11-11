const webpack = require('webpack');
const path = require('path');


module.exports = {
  images: {
    domains: ['assets.coingecko.com'],
  },
  reactStrictMode: true,
  entry: './src/index.js',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  //...
};

