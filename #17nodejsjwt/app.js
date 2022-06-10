const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors')

require('dotenv').config()

const app = express()

app.get('/', async (req, res, next) => {
    res.send("Hello Express")

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server runnirn on port ${PORT}`);
})