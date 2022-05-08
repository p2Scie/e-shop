const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
import { passwordVerify } from "../authentication/utils";

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done: any) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        done(null, user);

    } catch (e) {
        console.log(e);
        return done(e, null);
    }
});


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async function (username: string, password: string, done: any) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: username
                }
            });
            if (user) {
                const passwordCheck = await passwordVerify(password, user.password);
                if(passwordCheck) return done(null, user);
            }

        } catch (e) {
            console.log(e)
            return done(e, false);
        }
    })
);


module.exports = passport;