const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors')

require('dotenv').config()
require('./helper/init_mongodb')

const AuthRoute = require('./Routes/Auth.route')
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', async (req, res, next) => {
    console.log(req.headers('authorization'));
    res.send("Hello Express")

})

app.use('/auth', AuthRoute)
app.use(async (req, res, next) => {
    next(createError.NotFound())
})


app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server runnirn on port ${PORT}`);
})