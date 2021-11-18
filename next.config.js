const webpack = require('webpack');
const path = require('path');
//const withPlugins = require('next-compose-plugins');
//const optimizedImages = require('next-optimized-images');
const withImages = require('next-images')


module.exports = withImages( {
  
  images: {
    domains: ['assets.coingecko.com', 'myreactcryptotracker.web.app'],
    //  loader: 'imgix',
    //  path: 'https://assets.coingecko.com/coins/images/',
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
}
)
