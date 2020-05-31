const { resolve } = require('path')
const webpack = require('webpack')

const merge = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')

const { settings, commonConfig } = webpackCommon

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

module.exports = merge(commonConfig, {
    mode: 'development',

    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        'webpack/hot/only-dev-server',
        './index.tsx'
    ],

    output: {
        filename: 'main.js',
        publicPath: '/'
    },

    devtool: 'inline-source-map',

    devServer: {
        overlay: true,

        host: HOST,
        port: PORT,
        open: true,

        hot: true,
        noInfo: false,
        quiet: false,

        contentBase: settings.contextPath,
        publicPath: '/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
})
