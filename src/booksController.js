const books = require('./books')
var express = require('express')

var app = express();
app.use(express.json())

app.get("/books", function(req, res) {
    res.send(books)
})

app.get("/books/:id", function(req, res) {
    var book = books.find(b => b.id == req.params.id)
    res.send(book)
})

app.post("/books", function(req, res) {
    var book = {
        id: books.length + 1,
        name: req.body.name
    }

    books.push(book)

    res.send("Book registered successfully!")
})

app.put("/books/:id", function(req, res) {
    var book = books.find(f => f.id == req.params.id);

    if (book == null)
        res.send("Book not found!")
    else
    {
        book.name = req.body.name
        res.send("Book updated successfully!")
    }
})

app.delete("/books/:id", function(req, res) {
    var book = books.find(f => f.id == req.params.id);

    if (book == null)
        res.send("Book not found!")
    else
    {
        books.pop(book);
        res.send("Book removed successfully!");
    }
})

app.listen(8081, function() {
    console.log("API rodando!")
})