const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
// load static assetc
app.use("/static", express.static(path.join(__dirname, "public")))
app.use('assets',express.static(path.join(__dirname,'public/assets')))
// HOME route
app.get('/', (req, res) => {
    res.render('base', { title: "LoginSystem" })
})

app.listen(port, () => console.log('Server runnning localhost:3000'))