const express = require('express');
const router = express.Router()
const createError = require('http-errors')
const User = require('../models/User.model')

router.post('/register', async (req, res, next) => {
    console.log(req.body);
    try {
        const { email, password } = req.body
        if (!email || !password) throw createError.BadRequest()
        const doesExits = await User.findOne({ email: email })
        if (doesExits) throw createError.Conflict(`${email} is already is registered!`)

        const user = new User({ email, password })

        const savedUser = await user.save()


        res.send(savedUser)
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    res.send("Login route")
})

router.post('/refresh-token', async (req, res, next) => {
    res.send("refresh-token route")
})

router.post('/logout', async (req, res, next) => {
    res.send("refresh-token route")
})

module.exports = router

