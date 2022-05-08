import express from 'express';
const cors = require("cors");
import {PrismaClient} from '@prisma/client'

const session = require('express-session');
const passport = require("./authentication/passport");

const store = new session.MemoryStore();
const prisma = new PrismaClient();

// Running express server
const app: express.Application = express();
const port: number = 8000;


const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// Routes
const adminRoutes = require("./routes/admin");
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

//express session middleware
app.use(
    session({
        secret: "D53gxl41G",
        cookie: { maxAge: 172800000, secure: true, sameSite: "none" },
        resave: false,
        saveUninitialized: false,
        store
    })
);

//passportJS middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(cors(corsOptions));
app.use('/api', adminRoutes, userRoutes, authRoutes);



// Server setup
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
});

