const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile("index.html", 'utf-8', function (error, data) {
        let message = "Node Jsти окуйбуз!"
        let header = "Башкы бет";
        data = data.replace("{header}", header).replace("{message}", message);
        response.end(data)
    })
}).listen(3000)