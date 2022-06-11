const JWT = require('jsonwebtoken')
const createError = require('http-errors')


module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, rejected) => {
            const payload = {

            }
            const secret = process.env.ACCESS_TOKEN_SECRET
            const options = {
                expiresIn: "1d",
                issuer: "super.com",
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) {
                    console.log(err.message)

                    rejected(createError.InternalServerError())
                }
            })
        })
    }
}