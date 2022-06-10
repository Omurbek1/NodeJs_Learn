const express = require('express');
const mongoose = require('mongoose');

const Book = require('./models/Book')
mongoose.connect(`mongodb+srv://admin:admin@cluster0.kt7z4.mongodb.net/auth_roles`, {
    useNewUrlParser: true
})
    .then(() => {
        const app = express()

        const PORT = process.env.PORT || 5000
        app.get('/books', async (req, res) => {
            const books = await Book.find();

            res.send({ data: books })
        })

        app.listen(PORT, () => {
            console.log(`Сервер ${PORT} да иштеп жатат!!! Connection database`);
        })
    })
    .catch(() => {
        console.log('Database connection failed');
    })
