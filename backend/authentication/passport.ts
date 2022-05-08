const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

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
        return done(e);
    }
});


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async function (username: string, password: string, done: any) {
        console.log("Verification function called");
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: username
                }
            });
            // If user found, but password not valid
            if (user?.password != password) {
                return done(null, false);
            }

            console.log(user);
            return done(null, user)
        } catch (e) {
            console.log("Cet utilisateur n'existe pas");
            console.log(e)
            return done(e);
        }
    })
);


module.exports = passport;