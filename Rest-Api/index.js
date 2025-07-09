const express = require("express");

// Create an instance of the express application

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data

const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        price: 9.99,
        publishedYear: 1988,
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        price: 15.99,
        publishedYear: 2018,
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Programming",
        price: 29.99,
        publishedYear: 2008,
    },
    {
        id: 4,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        price: 8.99,
        publishedYear: 1949,
    },
    {
        id: 5,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        genre: "Technology",
        price: 32.5,
        publishedYear: 1999,
    },
];

// route to get all books

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Book API",
    });
});

// get all books
app.get("/getAllBooks", (req, res) => {
    res.json(books);
});

// get a book by id
app.get("/getBook/:id", (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find((b) => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// add a new book
app.post("/addBook", (req, res) => {
    const newBook = {
        id: books.length + 1, // simple id generation
        title: `Books ${books.length + 1}`,
    };

    books.push(newBook);
    res.status(201).json({
        data: newBook,
        message: "Book added successfully",
    });
});

// update a book by id
app.put("/updateBooks/:id", (req, res) => {
    const findCurrentBook = books.find(
        (b) => b.id === parseInt(req.params.id, 10)
    );
    if (findCurrentBook) {
        findCurrentBook.title = req.body.title || findCurrentBook.title;

        res.status(200).json({
            data: findCurrentBook,
            message: `Book with id ${req.params.id} updated successfully`,
        });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});


// delete a book by id
app.delete("/deleteBook/:id", (req, res) => {
    
    const findIndexOfCurrentBook = books.findIndex(b => b.id === parseInt(req.params.id, 10));
    if (findIndexOfCurrentBook !== -1) {
        
        const deletedBooks = books.splice(findIndexOfCurrentBook, 1);
        res.status(200).json({
            data: deletedBooks,
            message: `Book with id ${req.params.id} deleted successfully`,
        })

    }else {
        res.status(404).json({ message: "Book not found" });
    }

})

//port to listen on
const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
