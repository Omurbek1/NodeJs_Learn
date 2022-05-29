const http = require('http')
http.createServer(function (req, res) {
    res.end('Салам Дуйно!');


}).listen(3000, '127.0.0.1', function () {
    console.log('Сервер иштеп баштады!')
})