const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello  sExpress</h1>')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`);
})
