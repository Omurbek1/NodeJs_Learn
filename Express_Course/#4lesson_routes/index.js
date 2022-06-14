const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require('./routes/user')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', { title: "Oma" })
})

app.use('/users', userRouter)

app.listen(PORT, console.log(`Server running ${PORT}`))

