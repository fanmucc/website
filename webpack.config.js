const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index/index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        progress: true,
        port: 4000,
        open: true
    }
}