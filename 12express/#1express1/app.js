// express ти улап алабыз!

const express = require('express');

// Приложениянын оюбектисин тузуп алабыз!
const app = express();

// Маршуртизация учун обратботчикти аныктайбыз
app.get("/", function (request, response) {
    // Жоопту жиберебиз
    response.send("<h1>Салам баарынарга! Мен Express окуп жатам!</h1>")

});
// Портту укканды баштайбызя
app.listen(3000)