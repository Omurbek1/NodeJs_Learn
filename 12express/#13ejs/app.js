const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use("/contact", function (req, res) {
    res.render('contact', {
        title: "My Contacts",
        email: "oma@gmail.com",
        phone: "+996776882212"
    });
});

app.use("/", function (req, res) {
    res.send("Home page")
})