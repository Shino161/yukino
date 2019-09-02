const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// 打包之前清除文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 压缩CSS插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩CSS和JS代码
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 拷贝静态资源
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    optimization: {
        // 模块之间通过路径引用，避免新加入的模块导致模块id发生变化
        namedChunks: true,
        // 分离chunks
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial', // 只打包初始时依赖的第三方
                },
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_debugger: true,
                        drop_console: true,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    // 图片压缩
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[id].[contenthash].css',
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../dist/public'),
                ignore: ['index.html']
            }
        ]),
    ],
    mode: 'production',
});