// express ти улап алабыз!

const express = require('express');

// Приложениянын оюбектисин тузуп алабыз!
const app = express();

// Маршуртизация учун обратботчикти аныктайбыз
app.get("/", function (request, response) {
    // Жоопту жиберебиз
    response.send("<h1>Башкы бет!</h1>")

});
// Маршуртизация биз жонундо
app.get("/about", function (request, response) {
    // Жоопту жиберебиз
    response.send("<h1>Биз жонундо!</h1>")

});
// Маршуртизация контактар
app.get("/contact", function (request, response) {
    // Жоопту жиберебиз
    response.send("<h1>Контактар!</h1>")

});

// Портту укканды баштайбызя
app.listen(3000)