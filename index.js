const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbconfig = require('./config/database');
const Book = require('./model/book');

mongoose.connect(dbconfig.database, {
    useNewUrlParser: true
  });
  const db = mongoose.connection;

  
  // check database connection
  db.once('open', () => {
    console.log('Connected to MongoDB successfully');
  });
  
  // check for database errors
  db.on('error', (err) => {
    console.log(err);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

  // start the server

var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started on port 3000'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.post('/addBook', (req, res) => {
	var newBook = new Book(req.body);
	newBook.save().then(book => {
		res.send("New Book added to database Successfully !!!");
	})
	.catch(err => {
		res.status(400).send("Error ! Unable to add the new book !!!");
	});
});