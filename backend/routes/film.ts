import express from 'express';
import {PrismaClient} from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

router.get('/films', async (req: any, res: any) => {
    await prisma.film.findMany({
        orderBy: [
            {
                title: 'asc',
            },
        ],
    }).then((films) => {
        res.json(films)
    });
})

router.get('/edit-film/:filmId', async (req: any, res: any) => {
    await prisma.film.findFirst({
        where: {
            id: parseInt(req.params.filmId),
        },
    }).then((film) => {
        res.json(film)
    })
})

router.put('/edit-film/:filmId', async (req: any, res: any) => {
    await prisma.film.update({
        where: {
            id: parseInt(req.params.filmId),
        },
        data: {
            title: req.query.title,
            overview: req.query.overview,
            release_date: req.query.release_date,
            vote_average: parseFloat(req.query.vote_average)
        }
    }).then((film) => res.send(film))
})

module.exports = router;