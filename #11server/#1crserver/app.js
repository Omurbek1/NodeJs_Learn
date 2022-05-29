// Эта функция принимает два параметра:
// request: хранит информацию о запросе
// response: управляет отправкой ответа

// const http = require('http');
// http.createServer(function (request, response) {
//     console.log("Url:" + request.url);
//     console.log("Type request:" + request.method);
//     console.log("User-Agent:" + request.headers["user - agent"]);
//     console.log(request.headers);

//     response.end()
// }).listen(3000)





// Request
const http = require('http');

http.createServer(function (request, response) {
    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html");
    response.write("<h2>Hello World</h2>")
    response.end()
}).listen(3000)