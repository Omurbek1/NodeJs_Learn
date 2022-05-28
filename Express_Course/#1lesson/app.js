const express = require('express');
const app = express();
const port = 3000
app.get('/', (res, req) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`Port ${port}`)
})