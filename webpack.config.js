const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [ "./client/src/main.tsx", 'webpack-hot-middleware/client?path=/__webpack_hmr' ],
  
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist",
    publicPath: '/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { 
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader", 
        options: {
          configFileName: './client/tsconfig.json'
        }
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      
      // Sass
      {
        test:/.\scss$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: ['css-loader','sass-loader']
        }),
        include: path.resolve(__dirname,'src/styles')
      },{
        test: /.\css$/,
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}