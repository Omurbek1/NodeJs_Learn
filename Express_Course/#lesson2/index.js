const express = require('express');
const path = require('path');
const app = express()

app.set('view engine', 'ejs')
console.log(app.get('views'));
const { requestTime, logger } = require('./middlewares.js');

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)


// app.get('/', (req, res) => {
//     // res.send('<h1>Hello  sExpress</h1>')
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })

// app.get('/contact', (req, res) => {
//     // res.send('<h1>Hello  sExpress</h1>')
//     res.sendFile(path.resolve(__dirname, 'static', 'contact.html'))
// })

// Бул бетти кочуруу
// app.get('/download', (req, res) => {
//     console.log(req.requestTime);
//     console.log(req.logger);
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`);
})
