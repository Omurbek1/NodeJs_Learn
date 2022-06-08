const express = require('express');

const app = express();
app.get("/about", function (req, res) {
    res.send("<h1>About Website!</h1>")
});

app.use("/contact", function (req, res) {
    res.send("<h1>About Contact</h1>")
});

app.get("/", function (req, res) {
    res.send("Home")
});
app.listen(3000)