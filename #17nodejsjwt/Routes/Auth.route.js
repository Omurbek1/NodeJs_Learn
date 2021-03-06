const express = require('express');
const router = express.Router()
const createError = require('http-errors')
const User = require('../models/User.model')
const { authSchema } = require('../helper/validation.schema')
const { signAccessToken } = require('../helper/jwt_helper')

router.post('/register', async (req, res, next) => {
    console.log(req.body);
    try {
        const { email, password } = req.body
        // if (!email || !password) throw createError.BadRequest()
        const result = await authSchema.validateAsync(req.body)

        const doesExits = await User.findOne({ email: result.email })
        if (doesExits) throw createError.Conflict(`${result.email} is already is registered!`)

        const user = new User(result)

        const savedUser = await user.save()
        const accesToken = await signAccessToken(savedUser.id)
        res.send({ accesToken })
    } catch (error) {
        if (error.isJoi === true) error.status = 422
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body)
        const user = await User.findOne({ email: result.email })

        if (!user) throw createError.NotFound('User Not register')
        const isMatch = await user.isValidPassword(result.password)
        if (!isMatch) throw createError.Unauthorized('Username/password not valid')

        const accessToken = await signAccessToken(user.id)

        res.send({ accessToken })
    } catch (err) {
        if (err.isJoi === true) return next(createError.BadRequest('iNVALID USERnAME OR pASSWORD'))
        next(err)
    }
    res.send("Login route")
})

router.post('/refresh-token', async (req, res, next) => {
    res.send("refresh-token route")
})

router.post('/logout', async (req, res, next) => {
    res.send("refresh-token route")
})

module.exports = router

