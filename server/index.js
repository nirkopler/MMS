require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const usersRouter = require('./routers/usersRouter')
const moviesRouter = require('./routers/moviesRouter')
const membersRouter = require('./routers/membersRouter')
const subscriptionsRouter = require('./routers/subscriptionsRouter')

// Create an EXPRESS instance
const app = express()

// Enable CORS policy & POST option & Morgan Logger Setup
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Database Connection
require('./config/databaseConnection');

// Connect to Router
app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/members', membersRouter);
app.use('/api/subscriptions', subscriptionsRouter);

// Handling Errors
app.use((err, req, res, next) => {
    return res.status(500).json({ error: err.toString() });
});

// Get port for .env
const port = process.env.PORT || 3000;

//Server Listen
app.listen(port, () => {
    console.log(`Server Is Running at http://localhost:${port}`)
});