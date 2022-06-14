const express = require('express');

const app = express()
const PORT = process.env.PORT || 5000
app.get('/', function (req, res) {
    res.send('Hello')
})

app.get('/about', function (req, res) {
    res.send('<h1>About Page</h1>')
})
app.listen(PORT, console.log(`Server running on port ${PORT}`))