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
// const http = require('http');

// http.createServer(function (request, response) {
//     response.setHeader("Content-Type", "text/html")
//     response.write("<DOCTYPE html>");
//     response.write("<html>")
//     response.write("<head>")
//     response.write("<title>Hello Node Js</title>")
//     response.write("<meta charset=\"utf-8\">")
//     response.write("</head")
//     response.write("<body><h2>Салам</h2></body>")
//     response.write("</html>")
//     response.end()
// }).listen(3000)



// Маршуртизация

const http = require('http');
http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (response.url === "/home" || request.url === '/') {
        response.write("<h2>Home</h2>")
    }
    else if (request.url === "/about") {
        response.write("<h2>About</h2>")
    }
    else if (request.url == "/contact") {
        response.write("<h2>Contact</h2>")
    }
    else {
        response.write("<h2>Not Found!</h2>")
    }
    response.end()
}).listen(3000)