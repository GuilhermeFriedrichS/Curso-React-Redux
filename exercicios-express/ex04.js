const express = require('express')
const server = express()

server.route('/clients')
    .get((req, res) => res.send('Lista Clientes'))
    .post((req, res) => res.send('Novo Clientes'))
    .put((req, res) => res.send('Altera Clientes'))
    .delete((req, res) => res.send('Remove Clientes'))

server.listen(3000, () => console.log('Execultando...'))