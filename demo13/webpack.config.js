var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './main.js',
        vendor: ['jquery']
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            cacheGroups: {
                // default: {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true
                // },
                // //打包重复出现的代码
                // vendor: {
                //     chunks: 'initial',
                //     minChunks: 2,
                //     maxInitialRequests: 5, // The default limit is too small to showcase the effect
                //     minSize: 0, // This is example is too small to create commons chunks
                //     name: 'vendor'
                // },
                //打包第三方类库
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }),
        new webpack.optimize.RuntimeChunkPlugin({
            name: 'manifest'
        }),
        new htmlPlugin({
          minify:{ //是对html文件进行压缩
              removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
          },
          // hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
          template:'./index.html' //是要打包的html模版路径和文件名称。
      })
    ]
};
