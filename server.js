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

app.listen(3000);