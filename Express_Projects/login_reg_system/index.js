const express = require('express');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
const app = express()
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const User = require('./models/Users')
mongoose.connect("mongodb://localhost:27017/usersDB")


app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.get("/login", (req, res) => {
    res.render("login")
})


// Ports request are here
app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        email: email,
        password: password
    });
    newUser.save((err) => {
        err ? console.log(err) : res.send('Successfull Created ');
    })

})

app.post('/login', (req, res) => {

})



app.listen(PORT, () => console.log(`Server started on port ${PORT}`))