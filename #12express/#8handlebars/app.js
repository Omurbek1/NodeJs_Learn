const express = require('express');
const hbs = require('hbs');
const app = express();
app.set("view engine", "hbs")
hbs.registerPartial(__dirname + "/views/partials");

app.use("/contact", function (req, res) {
    res.render("contact", {
        title: "My Contacts",
        email: "oma@gmail.com",
        phone: "+996776882212"
    });
});
app.use("/", function (req, res) {
    res.render("home.hbs")
});
app.listen(3000)