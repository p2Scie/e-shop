import express from 'express';

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();
//middleware


router.get('/user', (req: any, res: any) => {
    //res.send('User home page')
    res.json({user: req.user})
})

router.get('/user/index', async (req, res) => {
    await prisma.user.findMany().then((result) => res.json(result))
})

module.exports = router;