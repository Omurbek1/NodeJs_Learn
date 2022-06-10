const express = require('express');

const mongoose = require('mongoose');



const bookController = require('./controllers/books')

mongoose.connect("mongodb+srv://admin:admin@cluster0.kt7z4.mongodb.net/auth_roles", {
    useNewUrlParser: true
})
    .then(() => {
        const app = express()

        app.use(express.json())

        const PORT = process.env.PORT || 5000
        app.get('/books', bookController.findBooks);
        app.post('/books', bookController.createBook);
        app.listen(PORT, () => {
            console.log(`Сервер ${PORT} да иштеп жатат!!! Connection database`);
        })
    })
    .catch(() => {
        console.log('Database connection failed');
    })
