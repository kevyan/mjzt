const { resolve } = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


const projectPath = resolve(__dirname, '../..')
const contextPath = resolve(projectPath, 'src')
const outputPath = resolve(projectPath, 'release')
const modulesPath = resolve(projectPath, 'node_modules')

const settings = {
    projectPath,
    contextPath,
    outputPath,
    modulesPath,
}

const commonConfig= {
    context: contextPath,

    output: {
        path: outputPath,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],

        alias: {
            "@ui/App": resolve(projectPath, 'src/components'),
            "@ui/Layouts": resolve(projectPath, 'src/components/layouts'),
            "@ui/Pages": resolve(projectPath, 'src/components/pages'),
            "@ui/Actions": resolve(projectPath, 'src/components/actions'),
            "@ui/Models": resolve(projectPath, 'src/components/models'),
            "@ui/Reducers": resolve(projectPath, 'src/components/reducers'),
            "@ui/Store": resolve(projectPath, 'src/components/store'),
        },
    },

    module: {
        rules: [{
            enforce: "pre",
            test: /\.(ts|tsx)?$/,
            loader: 'tslint-loader',
            exclude: [
                modulesPath
            ],
        }, {
            test: /\.(ts|tsx)?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,

                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'antd',
                                libraryDirectory: 'es',
                                style: 'css',
                            })
                        ]
                    }),

                    compilerOptions: {
                        module: 'es2015'
                    }
                },
            }],
            exclude: [
                modulesPath
            ],
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }, {
            test:/\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }, {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        }, {
            test: /\.jpg$/, loader: "file-loader"
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css"
        }),

        new HtmlWebpackPlugin({
            template: resolve(projectPath, 'public/index.html')
        }),
    ],
}

module.exports = {
    commonConfig,
    settings,
}
