// Функция, которая передается в app.use(), принимает три параметра:
// request: данные запроса
// response: объект для управления ответом
// next: следующая в конвейере обработки функция

const express = require('express');
const app = express();

app.use(function (request, response, next) {
    console.log("Биринчи орток программа middleware!");
    next();
});

app.use(function (request, response, next) {
    console.log("Экинчи орток программа middleware!");
    next();
});
app.use("/", function (request, response) {
    console.log("Route /");
    response.send('Салам Омурбек!')
})
app.listen(3000)
