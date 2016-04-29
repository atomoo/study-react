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
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
// webpack-configs
var webpackConfig = {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    resolve: { 
        alias: {
            'react': pathToReact,
            'react-dom': pathToReactDOM
        },
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
                loaders: ['babel'],
                include: APP_PATH
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react app'
        })
        // new webpack.ProvidePlugin({
        //     React: 'react',
        //     ReactDom: 'react-dom'
        // })
    ]
};
module.exports = webpackConfig;