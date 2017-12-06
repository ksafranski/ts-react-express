import * as express from 'express'
import * as path from 'path'

module.exports = (app: express.Application) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Starting webpack bundle with HMR...')
    const webpack = require('webpack')
    const webpackConfig = require('../../../webpack.config')
    const compiler = webpack(webpackConfig)
    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(__dirname, '../../../client/src'),
      hot: true,
      quiet: false,
      noInfo: false,
      lazy: false
    }))
    app.use(require('webpack-hot-middleware')(compiler))
  }
}