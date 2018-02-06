'use strict'
const path = require('path')

module.exports = {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    entry: {
        app: 'C:/git/vue-testing/BasicApp/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}
