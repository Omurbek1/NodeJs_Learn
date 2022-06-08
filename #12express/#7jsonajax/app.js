const express = require('express');
const app = express();
const jsonParser = express.json();
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if (!request.body) return response.sendStatus(4000)
    response.json(request.body)
})
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000)