const express = require('express');
const app = express();

app.use(function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use("/home/foo", function (req, res) {
    res.sendStatus(404).send(`<h1>Ресурс не найден!</h1>`);
});
app.listen(3000)