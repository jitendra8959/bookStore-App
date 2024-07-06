const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config();

const app = express();

const corsOptions = {
    // origin: process.env.APP_URL, // Replace with your Vue.js application's URL
    origin: true, // Replace with your Vue.js application's URL
    // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    // allowedHeaders: ['Content-Type', 'Authorization'], 
    // optionsSuccessStatus: 200,
    credentials: true
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
