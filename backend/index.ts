import express from 'express';

//const session = require('express-session');
//const store = new session.MemoryStore();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Running express server
const app: express.Application = express();
const port: number = 8000;

// Routes
const adminRoutes = require("./routes/admin");
const userRoutes = require('./routes/user');

//passportJS middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function (username: string, password: string, done: any) {
        // Look up user in the db
        //db.users.findByUsername(username, (err: any, user: any) => {
            // If there's an error in db lookup,
            // return err callback function
            //if(err) return done(err);

            // If user not found,
            // return null and false in callback
            //if(!user) return done(null, false);

            // If user found, but password not valid,
            // return err and false in callback
            //if(user.password != password) return done(null, false);

            // If user found and password valid,
            // return the user object in callback
            //return done(null, user)
        //});
    })
);
//session middleware
/*
app.use(
    session({
        secret: "D53gxl41G",
        cookie: { maxAge: 172800000, secure: true, sameSite: "none" },
        resave: false,
        saveUninitialized: false,
        store
    })
) */

app.use('/api', adminRoutes, userRoutes);

// Server setup
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
});

