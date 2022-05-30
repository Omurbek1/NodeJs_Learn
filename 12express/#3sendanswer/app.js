const express = require('express');
const app = express();

app.use(function (req, res) {
    res.send(`<DOCTYPE html>
    <html>
    <head>
    <title>Главная</title>
    <meta charset="utf-8"
    </head>
    <body>
    <h1>Главная</h1>
    <h1>Салам,экспресс</h1>
    </body>
    </html>`)
});
app.listen(3000)