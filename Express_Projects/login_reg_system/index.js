const express = require('express');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.get("/login", (req, res) => {
    res.render("login")
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))