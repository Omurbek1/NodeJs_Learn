const express = require('express');
const app = express();

const urlencodeParser = express.urlencoded({ extended: false });
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

});
app.post("/", urlencodeParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body);
    res.send(`${req.body.userName}-${req.body.UserAge}`)
});
app.listen(3000, () => console.log("Сервер иштеди!"))