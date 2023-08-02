var express = require('express')
var app = express();

const books = [
    {
        id: 1,
        nome: "Clean Architecture"
    },
    {
        id: 2,
        nome: "Clean Code"
    },
    {
        id: 3,
        nome: "Domain Driven Design"
    }
]

app.get("/books", function(req, res) {
    res.send(books)
})

app.get("/books/:id", function(req, res) {
    var book = books.find(b => b.id == req.params.id)
    res.send(book)
})

app.listen(8081, function() {
    console.log("API rodando!")
})