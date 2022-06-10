const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.kt7z4.mongodb.net/auth_roles',
    {
        dbName: 'auth_roles',
        useNewUrlParser: true
    },
)
    .then(() => {
        console.log('Mongodb connected!!');
    })
    .catch((err) => console.log(err.message))


mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db');
})

mongoose.connection.on('error', (err) => {
    console.log(err.message)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected!!');
})