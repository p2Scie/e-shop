import express from 'express';
const router = express.Router();

//middleware

router.get('/user', (req, res) => {
    res.send('User home page')
})

module.exports = router;