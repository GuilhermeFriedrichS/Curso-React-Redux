const express = require('express')
const server = express()
//.use usa quando quer que inicie com aquela URL
server.use(function(req, res, next) {
    console.log('Inicio!')
    next()
    console.log('Fim!')
})

server.use(function(req, res) {
    console.log('Resposta!')
    res.send('<h1>Teste Express!</h1')
})

server.listen(3000, () => console.log('Execultando...'))