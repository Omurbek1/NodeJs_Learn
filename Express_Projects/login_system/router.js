const express = require('express');
const router = express.Router();
const createial = {
    email: "admin@gmail.com",
    password: "admin1234"
}
// Login user
router.post("/login", (req, res) => {
    if (req.body.email == createial.email && req.body.password == createial.password) {
        req.session.user = req.body.email;
        // res.end('Login Succesfull')
        res.redirect('/route/dashboard')
    } else {
        res.end("Invalid username or password")
    }
})
// Route for dashbaord
router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { user: req.session.user })
    } else {
        res.send('Unauthoriza User')
    }
})


// router for logout
router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
            res.send('Error')
        } else {
            res.render('base',{title:"Express",logout:"Logout Successfull"})
        }
    })
})


module.exports = router;