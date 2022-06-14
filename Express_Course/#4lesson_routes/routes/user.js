const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.setDefaultEncoding('User name');
});

// КФЫСКАРТЫЛЫП ЖАЗЫЛГАНЫ
ROU
router.get('/new', (req, res) => {
    res.send('New User')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    res.send(`Get user with id ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete user with id ${req.params.id}`)
})
router.put('/:id', (req, res) => {
    res.send(`Update  user with id