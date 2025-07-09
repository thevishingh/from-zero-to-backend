const express = require('express');


// Importing necessary modules
const app = express();

// Application-level middleware to parse JSON bodies
app.set('view engine', 'ejs');

// routing
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

