const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const BookStore = require('./models/BookModel');

const app = express();

app.use(bodyParser.json());
app.use(cors());

/*app.get('/', (req, res) => {
    res.send('Hello World!!');
})

app.get('/news', (req, res) => {
    res.send('<h1>News</h1>');
});*/

// mongoose connection
mongoose.connect('mongodb+srv://elif:test123@cluster0.ehz8iuk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err);
});

app.post('/add-book', async(req, res) => {
    try {
        const newBook = new BookStore({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            quantity: req.body.quantity,
            comments: req.body.comments
        });
        const book = await newBook.save();
        res.status(200).json(book);
      } catch (err) {
        res.send(err);
      }
})

app.get('/books', async(req, res) => {
    try {
        const books = await BookStore.find();
        res.status(200).json(books);
      } catch (err) {
        res.send(err);
      }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
