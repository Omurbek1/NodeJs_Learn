const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/usersDB")

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model('User', userSchema)

module.exports = User;