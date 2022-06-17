const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require('./routes/user')
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use('/users', userRouter)

function middleLogger(req, res, next) {
    console.log(req.originalUrl);
    next();
}
app.listen(PORT, console.log(`Server runningas ${PORT}`))

