<<<<<<< HEAD
const webpack = require ('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
=======
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require ('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
>>>>>>> d32b850 (Synchronizing projects)
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
<<<<<<< HEAD
=======
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
>>>>>>> d32b850 (Synchronizing projects)
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
<<<<<<< HEAD
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader',
                'css-loader'
            ]
=======
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader',
                'css-loader',
                'sass-loader',  
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
>>>>>>> d32b850 (Synchronizing projects)
        }]
    }
}