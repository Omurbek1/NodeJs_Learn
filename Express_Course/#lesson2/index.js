const express = require('express');
const path = require('path');
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'template'));
console.log(app.get('views'));
const { requestTime, logger } = require('./middlewares.js');

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)


app.get('/', (req, res) => {
    res.render('index', { title: "Main Page", active: 'main' })
})
app.get('/about', (req, res) => {
    res.render('about', { title: "About Page", active: 'about' })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`);
})
