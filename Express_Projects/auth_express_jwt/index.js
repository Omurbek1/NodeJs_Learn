const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
const start = async () => {
    try {
        await mongoose.connect(`mongodb + srv://oma:oma52280930@cluster0.kt7z4.mongodb.net/auth_roles?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Сервер ${PORT} да иштеп жатат!`))
    } catch (e) {
        console.log(e);

    }
}

start()