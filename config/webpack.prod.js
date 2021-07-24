const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = () => merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map'
});
