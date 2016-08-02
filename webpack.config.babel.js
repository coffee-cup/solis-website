import WebpackNotifierPlugin from 'webpack-notifier'
import webpack from 'webpack'
import path from 'path'

require('es6-promise').polyfill()

let config = {
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
            loader: "eslint-loader",
            exclude: [/node_modules/, /server/]
        }],
        loaders: [{
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=100000'
        }]
    },
    plugins: [new WebpackNotifierPlugin()]
};

if (process.env.NODE_ENV === 'production') {
    config.devServer = {},
        config.devtool = '',
        config.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin()
        ]
} else {    config.devtool = 'source-map'
}

export default config
