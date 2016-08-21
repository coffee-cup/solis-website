import WebpackNotifierPlugin from 'webpack-notifier';
import DashboardPlugin from 'webpack-dashboard/plugin';
import webpack from 'webpack';
import path from 'path';

require('es6-promise').polyfill();

const config = {
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: 'public',
        historyApiFallback: true
    },
    module: {
        preLoaders: [{
            test: /(\.jsx)$/,
            loader: 'eslint-loader',
            exclude: [/node_modules/, /server/],
        }],
        loaders: [{
            test: /\.json$/,
            loader: 'json',
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style', 'css', 'sass'],
        }, {
            test: /\.(jpg|png)$/,
            exclude: /node_modules/,
            loader: 'url?limit=100000',
        }, {
            test: /\.svg$/,
            loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]',
        }, {
            test: /\.woff$/,
            loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]',
        }, {
            test: /\.woff2$/,
            loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]',
        }, {
            test: /\.[ot]tf$/,
            loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]',
        }, {
            test: /\.eot$/,
            loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]',
        }],
    },
    plugins: [
        new WebpackNotifierPlugin(),
        new DashboardPlugin(),
    ],
};

if (process.env.NODE_ENV === 'production') {
    config.devServer = {};
    config.devtool = '';
    config.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ];
} else {
    config.devtool = 'source-map';
}

export default config;
