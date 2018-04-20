const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const publicDir = path.join(__dirname, '..');

module.exports = {
    entry: [
        path.join(__dirname, '..', 'src', 'index.jsx'),
    ],
    output: {
        path: publicDir,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: /src/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    devServer: {
        port: 8000,
        contentBase: publicDir
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};