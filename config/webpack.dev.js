const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const reloadServer = require('./ReloadServer');
const CompilerEmitPlugin = require('./plugins/CompilerEmitPlugin');

module.exports = () => merge(commonConfig, {
    mode: 'development',
    entry: {
        popup: './src/popup',
        background: ['./src/background', './src/reload/Background'],
        contentScripts: ['./src/content-scripts', './src/reload/ContentScript'],
        demo: './src/view/demo'
    },
    devtool: 'source-map',
    plugins: [
        new CompilerEmitPlugin()
    ],
    devServer: {
        lazy: false,
        // 将 bundle 写到磁盘而不是内存
        writeToDisk: true,
        before(app) {
            reloadServer(app);
        }
    }
});
