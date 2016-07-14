/**
 * Created by Atom on 2016/4/27.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// some path
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'output');
var TEMPLATE_PATH = path.resolve(ROOT_PATH, 'app/template');
var node_modules = path.resolve(__dirname, 'node_modules');
// webpack-configs
var webpackConfig = {
    entry: {
        app: path.resolve(APP_PATH, 'components')
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //enable dev source map
    // devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: TEMPLATE_PATH + '/index.html',
            inject: 'body'
        })
    ]
};
module.exports = webpackConfig;