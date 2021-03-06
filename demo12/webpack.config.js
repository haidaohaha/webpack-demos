var webpack = require('webpack');

module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.optimize.SplitChunksPlugin({
      name: "commons",
      // (the commons chunk name)

      filename: "commons.js",
      // (the filename of the commons chunk)
    })
  ]
}
