const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index/index.js',
        home: './src/home/index.js'
    },
    output: {
        filename: '[name]_[chunkhash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    // {
                    //     loader: 'style-loader',         // 内联样式
                    //     options: {
                    //         insertAt: 'top',
                    //         singleton: true,
                    //     }
                    // },
                    'style-loader/url',
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // css文件单独打包
            filename: '[name]_[contenthash:8].css',
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.css$',
            template: `./src/index/index.html`,
            filename: `index.html`,
            templateParameters: {
                'path': '../src/index/index.css'
            },
            // chunks: ['vendors'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false,
            },
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.css$',
            template: `./src/home/index.html`,
            filename: `home.html`,
            templateParameters: {
                'path': '../src/home/index.css'
            },
            // chunks: ['vendors'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false,
            },
        }),
        new HTMLInlineCSSWebpackPlugin(),
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     progress: true,
    //     port: 4000
    // }
}