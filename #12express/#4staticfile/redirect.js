// Для переадресации применяется метод redirect():
const express = require('express');
const app = express();
app.use("/home", function (req, res) {
    res.redirect("about")
});

app.use("/about", function (req, res) {
    res.send("abaasout")
})
app.listen(3000)