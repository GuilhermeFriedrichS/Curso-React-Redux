const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js', //Arquivo de entrada que vai referenciar todo o resto
    output: {
        path: __dirname + '/public',
        filename: './bundle.js' //Arquivo de saida que existe em tempo de execução a não ser que gere um com "./node_modules/.bin/webpack"
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{//Configura loader para que os import e exports funcionem
            test: /.js?/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015'], //Para entender os export e imports
                plugins: ['transform-object-rest-spread'] //Para entender o spread (...)
            }
        }]
    }
}