const http = require('http');
// console.log(http);

http.createServer(function(req, res) {
  res.end('<h1>Ola</h1>');
}).listen(3000);

console.log('Meu servidor está rodando');