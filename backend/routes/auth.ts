import express from 'express';
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();
const passport = require("passport");

const router = express.Router();

router.post('/login', passport.authenticate('local'),
    (req: any, res: any) => {
        req.session.authenticated = true;
        console.log(req.body)
        console.log(req.session);
        res.status(200).send('logged in!');
    }
);

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    // Create new user:

    // Add if/else statement with the new user as the condition:
    //if () {
        // Send correct response if new user is created:

   // } else {
        // Send correct response if new user failed to be created:

  //  }
});


module.exports = router;