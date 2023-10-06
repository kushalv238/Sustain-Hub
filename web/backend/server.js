require('dotenv').config()

const path = require('path');

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn');

const User = require('./model/User');

const PORT = process.env.PORT || 3500;

connectDB();

//built-in middleware
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')));

//3rd party middleware
app.use(cookieParser())
app.use(cors(corsOptions))

//custom middleware
app.use(logger)

//router
app.use('/', require('./routes/root'));
app.use('/products', require('./routes/productRoutes'));
app.use('/prodScore', require('./routes/productScoreRoutes'));
app.use('/addRaw', require('./routes/rawDataRoutes'));

//Register
app.post('/auth/register', async (req, res) => {
    try {
        const { firstName, lastName, email, username, password } = req.body;

        const user = new User({ firstName, lastName, email, username, password });
        await user.save();
        res.status(201).json({ message: 'Registration Successful' });
    }
    catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
})

//Login
app.post('/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        res.status(200).json({ message: 'Login successful' })
    }
    catch (error) {
        res.status(500).json({ error: 'Login failed' })
    }
})


app.all('*', (req, res) => {
    res.status(404);

    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '..', 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 not found' })
    } else {
        res.type('text').send('404 not found');
    }
})

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
});

mongoose.connection.on('error', err => {
    console.error(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
})