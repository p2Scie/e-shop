import express from 'express';

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();
//middleware


router.get('/user', (req, res) => {
    res.send('User home page')
})

router.get('/user/index', async (req, res) => {
    const result = await prisma.user.findMany()
    res.json(result)
})

router.post(`/user/new`, async (req, res) => {
    const result = await prisma.user.create({
        data: {
            ...req.body,
        },
    })
    res.json(result)
})
module.exports = router;