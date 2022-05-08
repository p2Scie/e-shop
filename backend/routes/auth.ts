import express from 'express';
import { passwordHash } from "../authentication/utils";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();
const passport = require("passport");

const router = express.Router();

router.post('/login', passport.authenticate('local'),
    (req: any, res: any) => {
        //req.session.authenticated = true;
        res.status(200).json({msg: 'logged in!', user: req.user});
    }
);

router.post("/register", async (req, res) => {
    const {email, firstname, lastname} = req.body;

    const password = await passwordHash(req.body.password, 10);

    // Create new user:
    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                password,
                firstname,
                lastname
            }
        })

        if (newUser) {
            res.status(201).json({
                msg: "L'utilisateur a bien été créer !",
                newUser
            })
        }
    } catch (e) {
        res.status(500).json({msg: "Impossible de créer l'utilisateur !", e})
    }
});

router.get('/logout', (req: any, res: any, next: any) => {
    req.logout();
    //res.redirect('/login');
    res.json({msg: "Vous avez bien été déconnecter", user: req.user, session: req.sessionId})
})

//recupérer le user connecté
router.get('/auth', (req: any, res: any) => {
    if(req.user) {
        res.json({user: req.user})
    }
})

module.exports = router;