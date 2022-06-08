const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const router = require('./router');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const { v4: uuidv4 } = require("uuid")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
// load static assetc
app.use("/static", express.static(path.join(__dirname, "public")))
app.use('assets', express.static(path.join(__dirname, 'public/assets')))


app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

app.use('/route',router)
// HOME route
app.get('/', (req, res) => {
    res.render('base', { titl: "LoginSystem" })
})

app.listen(port, () => console.log('Server runnning localhost:3000'))