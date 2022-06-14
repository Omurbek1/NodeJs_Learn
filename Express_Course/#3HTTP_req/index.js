const express = require('express');
const app = express()

const PORT = process.env.PORT || 5000
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
    res.render('index', { title: "Omurbek" })
})


app.get('/about', function (req, res) {
    res.render('about')
})
app.listen(PORT, console.log(`Server running on port ${PORT}`))