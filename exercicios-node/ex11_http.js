const http = require('http')
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end('<h1>Teste</h1')
})

const port = 1234
server.listen(port, function() {
    console.log(`Escultando porta: ${port}`)
})