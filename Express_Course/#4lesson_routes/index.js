const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require('./routes/user')

app.set('view engine', 'ejs')
app.use(middleLogger)
app.get('/', function (req, res) {
    res.render('index', { title: "Oma" })
})

app.use('/users', userRouter)

function middleLogger(req, res, next) {
    console.log(req.originalUrl);
    next();
}
app.listen(PORT, console.log(`Server running ${PORT}`))

