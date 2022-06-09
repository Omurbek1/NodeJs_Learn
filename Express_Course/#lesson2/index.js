const express = require('express');
const path = require('path');
const app = express()

app.get('/', (req, res) => {
    // res.send('<h1>Hello  sExpress</h1>')
    res.sendFile(path.resolve(__dirname,'static','index.html'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`);
})
