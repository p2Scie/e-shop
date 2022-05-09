import express from 'express';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
const cors = require("cors");
const cookieParser = require('cookie-parser');
import {PrismaClient} from '@prisma/client'
const session = require('express-session');
const passport = require("./authentication/passport");

const prisma: any = new PrismaClient();

// Running express server
const app: express.Application = express();
const port: number = 8000;

// Routes
const adminRoutes = require("./routes/admin");
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const filmRoutes = require('./routes/film');

const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(
    session({
        cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
        secret: "Hala Madrid!",
        saveUninitialized: false,
        resave: false,
        store: new PrismaSessionStore(
            prisma,
            {
                checkPeriod: 2 * 60 * 1000,  //ms
                dbRecordIdIsSessionId: true,
                dbRecordIdFunction: undefined,
            }
        )
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));
app.use('/api', adminRoutes, userRoutes, authRoutes, filmRoutes);


// Server setup
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
});