var http = require('http');

http.createServer(function(req, res){
    res.end('ola pessoas')
}).listen(3000);

console.log("servidor rodando");