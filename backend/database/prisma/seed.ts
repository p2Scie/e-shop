import {PrismaClient} from '@prisma/client';
import {passwordHash} from "../../authentication/utils";
import Film from "../../Models/Film";
import axios from "axios";
import film from "../../Models/Film";

const prisma = new PrismaClient();

const loadData = async (): Promise<void> => {
    try {
        await createAdmin()
        getFilms()
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

async function createAdmin(): Promise<void> {
    await prisma.user.deleteMany({});
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

async function getFilms(): Promise<void> {
    await prisma.film.deleteMany({});
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/4/list/1',
        params: {api_key: '0ab3f15a14f0842244b0370ec053f776', language: 'fr'},
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
                vote_count: film.vote_count,
            };
        })

        const createMany = await prisma.film.createMany({
            data: films
        })
    })
    console.log("Films imported!")
}

loadData().then(r => console.log('Done!'));