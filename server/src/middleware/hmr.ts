const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../../webpack.config.js')

module.exports = function createHMRMiddleware () {
  const { HOST, PORT } = process.env
  const publicPath = '/'
  webpackConfig.output.publicPath = publicPath
  webpackConfig.entry.main.unshift(
    `webpack-hot-middleware/client.js?path=${publicPath}__webpack_hmr`
  )
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  )

  const webpackCompiler = webpack(webpackConfig)
  const devMiddleware = webpackDevMiddleware(webpackCompiler, {
    noInfo: true,
    publicPath,
    watchOptions: {
      ignored: /node_modules/,
    },
    stats: 'minimal',
  })
  const hotMiddleware = webpackHotMiddleware(webpackCompiler)
  return [devMiddleware, hotMiddleware]
}