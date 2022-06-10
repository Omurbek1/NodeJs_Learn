const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.kt7z4.mongodb.net/auth_roles', { dbName: 'auth_roles' })
    .then(() => {
        console.log('Mongodb connected!!');
    })
    .catch((err) => console.log(err.message))