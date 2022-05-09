import {PrismaClient} from '@prisma/client';
import {passwordHash} from "../../authentication/utils";
import Film from "../../Models/Film";
import axios from "axios";
import 'dotenv/config'

const prisma = new PrismaClient();

const loadData = async (): Promise<void> => {
    try {
        await prisma.stock.deleteMany({});
        await prisma.user.deleteMany({});
        await prisma.film.deleteMany({});

        await createAdmin();
        await insertFilms();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

async function createAdmin(): Promise<void> {
    const hashedPassword = await passwordHash('admin123', 10);
    await prisma.user.create({
        data: {
            email: 'admin@test.fr',
            role: 'ADMIN',
            password: hashedPassword
        }
    })
    console.log("L'admin a bien été créer !")
}

async function insertFilms(): Promise<void> {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/4/list/1',
        params: {api_key: process.env.FILM_API_KEY , language: 'fr'},
    };

    axios.request(options).then(async function (response: any) {
        const films: [] = response.data.results.map((film:Film) => {
            return {
                title: film.title,
                overview: film.overview,
                adult: film.adult,
                media_type: film.media_type,
                original_language: film.original_language,
                release_date: film.release_date,
                vote_average: film.vote_average,
            };
        })

        await prisma.film.createMany({
            data: films
        }).then(() => insertStock())
    })
    console.log("Films imported!")
}


async function insertStock(): Promise<void> {

    let stocks: any[] = [];
    await prisma.film.findMany().then((films) => {
        films.forEach(film => {
            stocks.push({
                price: getRndInteger(5, 24),
                filmId: film.id,
                quantity: getRndInteger(1, 100)
            })
        })
    });

    await prisma.stock.createMany({
        data: stocks
    })
}

function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

loadData().then(() => console.log('Done!'));