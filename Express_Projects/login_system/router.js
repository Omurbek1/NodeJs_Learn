const express = require('express');
const router = express.Router();
const createial = {
    email: "admin@gmail.com",
    password:"admin1234"
}
// Login
router.post("/login", (req, res) => {
    if(req.body.email==createial.email && req.body.password==createial.password)
    {
        req.session.user = req.body.email;
        res.redirect('/dashboard')
    } else {
        res.end("Invalid username or password")
}})