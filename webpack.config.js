const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    // entry : __dirname + "/app/main.js",
    entry: __dirname + "/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        // contentBase : "./public",
        contentBase: "./dist",
        // contentBase: "./",
        // colors : true,
        hot: true,
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            // {
            //     test: /\.(html)$/,
            //     use: {
            //         loader: 'html-loader',
            //         options: {
            //             attrs: [':data-src']
            //         }
            //     }
            // },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i, // 이미지 로더
            //     exclude: /node_modules/,
            //     loader: 'file-loader?name=[name].[ext]&publicPath=./img/&outputPath=./dist/img/' // PublicPath : css 이미지 폴더 경로, outputPath : 이미지 폴더 경로
                // loader: 'url-loader'
            // },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            // title: 'My Awesome application',
            // myPageHeader: 'Hello World',
            template: './index.html',
            filename: './index.html' //relative to root of the application
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new CopyWebpackPlugin([
            {from:'./img',to:'img'}
        ]),
    ]
}
