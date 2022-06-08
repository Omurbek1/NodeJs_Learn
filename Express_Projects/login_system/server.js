const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
// HOME
app.get('/', (req, res) => {
    res.render('base', { title: "LoginSystem" })
})

app.listen(port, () => console.log('Server runnning localhost:3000'))