const { merge } = require('webpack-merge');

const baseWebpackConfig = require('./webpack.config.base');

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: 'eval-source-map',
    mode: 'development',
    stat: {
        children: false
    }
})

module.exports = devWebpackConfig;