process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.config.merge({
  devServer: {
    watchOptions: {
      poll: process.env.WEBPACK_DEV_SERVER_WATCH_POLL,
      aggregateTimeout: process.env.WEBPACK_DEV_SERVER_WATCH_TIMEOUT
    }
  }
});

module.exports = environment.toWebpackConfig()
