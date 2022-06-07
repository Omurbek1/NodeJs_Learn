const express = require('express');
let app = express();
app.get("/", function (req, rs) {
    rs.send("Hello");
});
app.listen(3000);
module.exports.app = app;