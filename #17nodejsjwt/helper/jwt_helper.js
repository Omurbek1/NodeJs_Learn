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
    },
    verifyAccessToken: (req, res, next) => {
        if (!req.headers['authorization']) return next(createError.Unauthorized())
        const authHeader = req.headers['authorization']
        const brearerToken = authHeader.split('')
        const token = brearerToken[1]
        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                return next(createError.Unauthorized())

            }
            req.payload = payload
            next()
        }

        )
    }

}