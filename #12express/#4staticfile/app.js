const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
app.use("/", function (req, res) {
    res.send("<h1>Башкы бет</h1>")
})
app.listen(3000)