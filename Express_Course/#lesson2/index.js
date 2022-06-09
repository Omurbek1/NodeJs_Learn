const express = require('express');
const path = require('path');
const { requestTime, logger } = require('./middlewares.js');
const serverRoutes = require('./routes/servers.js');
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'template'));
console.log(app.get('views'));

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)

app.use(serverRoutes)

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
