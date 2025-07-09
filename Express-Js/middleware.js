const express = require('express');

const app = express();

// define middleware function

const myFirstMiddleware = (req, res, next) => {
  console.log('Middleware executed');
  // Call next() to pass control to the next middleware or route handler
  next();
}

// use middleware
app.use(myFirstMiddleware);


// define a route
app.get('/', (req, res) => {
    res.send('About Page')
});

PORT = process.env.PORT || 3000;
// start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})