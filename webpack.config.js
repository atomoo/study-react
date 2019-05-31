/**
 * @file webpack config
 * @author atom
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {cacheDirectory: true},
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8181,
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
