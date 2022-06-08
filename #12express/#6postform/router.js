const express = require('express');
const app = express()


app.use("/about", function (req, res) {
    res.send("Сайт жонундо")
});

app.use("/products/create", function (req, res) {
    res.send("Товар кошуу");
});

app.use("/products/:id", function (req, res) {
    res.send(`Товар ${req.params.id}`);
})
app.use("/products/", function (req, res) {
    res.send("Товардын списогу")
});

app.use("/", function (req, res) {
    res.send("Башкы бет")
})
app.listen(3000)