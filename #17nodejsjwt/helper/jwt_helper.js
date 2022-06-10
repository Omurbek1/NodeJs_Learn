const JWT = require('jsonwebtoken')
const createError = require('http-errors')


module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, rejected) => {
            const payload = {

            }
            const secret = "some super secret"
            const options = {
                expiresIn: "1d",
                issuer: "super.com",
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) rejected(err)
                resolve(token)
            })
        })
    }
}