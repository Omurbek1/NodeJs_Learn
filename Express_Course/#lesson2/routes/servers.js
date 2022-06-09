const { Router } = require('express');
const router = Router()

router.get('/api/server', (req, res) => {
    res.json({ test: 42 })
})
module.exports.router = router
