const express = require("express");
const app = express();
const formidable = require("express-formidable");
const fs = require('fs');

const exphbs = require('express-handlebars');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(formidable());

app.get('/', function(req, res) {
    res.render('index')

})

app.get('/sport', function(req, res) {
    res.render('sport')

})

app.get('/tec', function(req, res) {
    res.render('tec')

})

app.get('/uk', function(req, res) {
    res.render('uk')

})

app.get('/usa', function(req, res) {
    res.render('usa')

})

app.get('/art', function(req, res) {
    res.render('art')
})

app.get('/natural', function(req, res) {
    res.render('nature')
})
app.get('/eco', function(req, res) {
    res.render('eco')
})
app.get('/edu', function(req, res) {
    res.render('edu')
})

app.listen(3000);