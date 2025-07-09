const express = require('express');
const path = require('path');

// Create an Express application
const app = express();



// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));


const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 20.99 },
    { id: 3, name: 'Product 3', price: 30.99 },
];

app.get('/', (req, res) => {
   res.render('home', { title: 'Home', products: products });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});


// Port number
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
