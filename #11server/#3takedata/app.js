const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    if (request.url === '/user') {
        let data = ""
        request.on("data", chunk => {
            data += chunk
        });
        request.on("end", () => {
            console.log(data);
            response.end('Маалыматтар ийгиликтуу алынды!')
        })
    } else {
        fs.readFile('index.html', (error, data) => response.end(data))
    }
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));