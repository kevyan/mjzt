const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackCommon = require('./webpack.common.js')

const { settings, commonConfig } = webpackCommon
const { projectPath } = settings

module.exports = merge(commonConfig, {
    mode: 'production',

    entry: [
        './index.tsx'
    ],

    output: {
        filename: '[name].[contenthash:8].js',
    },

    optimization: {
        runtimeChunk: 'single',

        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return 'vendor';
                    },
                },
            },
        },
    },

    // devtool: 'source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
    ],
})
