const express = require('express');

const app = express();



// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));
// Middleware to log requests
app.use((req, res) => {
 res.send("Hello, World!");
});


const PORT = process.env.PORT || 3000;
// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})