const express = require('express');

const app = express();


// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Simple route to respond with "Hello, World!"
app.get('/', (req, res) => {
    res.send('All Products!');
});

// get single product
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Product details for ID: ${productId}`);
});

// Start the server
const port = 3000;  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});