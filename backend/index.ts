import express from 'express';

// Running express server
const app: express.Application = express();
const port: number = 8000;

// Routes
const adminRoutes =  require("./routes/admin");
const userRoutes = require('./routes/user');
 
app.use('/api', adminRoutes, userRoutes);
 
// Server setup
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
});