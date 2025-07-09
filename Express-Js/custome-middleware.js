const express = require('express');

const app = express();

// Middleware to log request details

const requestTimeLogger = (req, res, next) => {
    const currentTime = new Date().toISOString();

    console.log(`${currentTime} from ${req.method} to ${req.url}`);
    next();
}

// Use the custom middleware
app.use(requestTimeLogger);

// Define a route
app.get('/', (req, res) => {
    res.send('About Page');
});

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});