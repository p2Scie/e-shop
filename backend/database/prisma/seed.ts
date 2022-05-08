import {PrismaClient} from '@prisma/client';
import { passwordHash } from "../../authentication/utils";
const prisma = new PrismaClient();

const loadData = async (): Promise<void> => {
    try {
        const hashedPassword = await passwordHash('admin123', 10);
        await prisma.user.create({
            data: {
                email: 'admin@test.fr',
                role: 'ADMIN',
                password: hashedPassword
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