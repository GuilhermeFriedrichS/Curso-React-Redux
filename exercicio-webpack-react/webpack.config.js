const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx', //Arquivo de entrada que vai referenciar todo o resto, No caso do react no lugar do js ia ser jsx
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
            test: /.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'], //Para entender os export e imports
            }
        }]
    }
}