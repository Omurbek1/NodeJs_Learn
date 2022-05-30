const express = require('express');
const app = express();
app.get("/", function (req, res) {
    res.send("<h1>Башкы бет</h1>")
});
app.use("/about", function (req, res) {
    let id = req.query.id;
    let userName = req.query.name;
    res.send("<h1>Маалымат </h1><p>id=" + id + "</p><p>" + userName + "</p> ")

});
app.listen(3000)