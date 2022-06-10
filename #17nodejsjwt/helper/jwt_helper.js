const JWT = require('jsonwebtoken')
const createError = require('http-errors')


module.exports = {
    signAccessToken: (userId) => {
        return new Promise((resolve, rejected) => {
            const payload = {
                name: "your tssry"
            }
            const secret = "some super secret"
            const options = {
                
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) rejected(err)
                resolve(token)
            })
        })
    }
}