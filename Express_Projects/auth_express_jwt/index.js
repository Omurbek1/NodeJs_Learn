const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:admin@cluster0.kt7z4.mongodb.net/auth_roles`, {
    useNewUrlParser: true
})
    .then(() => {
        const app = express()

        const PORT = process.env.PORT || 5000
        app.get('/', (req, res) => {
            res.send('<h1>Updated </h1>')
        })

        app.listen(PORT, () => {
            console.log(`Сервер ${PORT} да иштеп жатат!!! Connection database`);
        })
    })
    .catch(() => {
        console.log('Database connection failed');
    })
