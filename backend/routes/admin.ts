import express from 'express';
const router = express.Router();

//middleware

router.get('/admin', (req, res) => {
    res.send('Admin home page')
})

module.exports = router;