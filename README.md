# NewsNodeJs
1-create backage 

npm init
--------------------------------------------
2-add libraries

install express
npm install express --save

install formidable
npm install express-formidable --save

install express holderbars
npm install express-holderbars --save

install ajax xmlhttp request
npm instal xmlhttprequest --save

-------------------------------------------
3-create new file 

touch server.js 
---------------------------------------------------------------------------------------------


4- start generate the server andd require the libraries and frame works we had add 

create express server
const express = require("express");

use the server 
const app = express();

reuire formidable
const formidable = require("express-formidable");

require file system
const fs = require('fs');

require holderbars
const exphbs = require('express-handlebars');

require xmlhttp request
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


generate handlebars exgine with default layout is main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

activate the engine
app.set('view engine', 'handlebars');


this will allow server to access files js css images ... express static
app.use(express.static('public'));

need to activative formidable // Note we should add it after express.static
app.use(formidable());


//server will work in port 3000
app.listen(3000);

-----------------------------------------------------------------------------------------------
