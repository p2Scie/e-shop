import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const loadData = async (): Promise<void> => {
    try {
        await prisma.user.create({
            data: {
                email: 'admin@test.fr',
                role: 'ADMIN',
                password: 'admin123'
            }
        })
        console.log("L'admin a bien été créer !")
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

loadData().then(r => console.log('Done!'));