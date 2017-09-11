const express = require("express");
const app = express();
const formidable = require("express-formidable");
const fs = require('fs');
const exphbs = require('express-handlebars');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var bodyParser = require('body-parser');


let myArrInterNationalNewsUp = [];
let myArrInterNationalNewsDown = [];
let myArrayUKUp = [];
let myArrayUKDowun = [];
let myArrayUsaUp = [];
let myArrayUsaDown = [];
let myArrayEcoUp = [];
let myArrayEcoDowun = [];
let myArraySprotUp = [];
let myArraySprotDoen = [];
let myArrayArtUp = [];
let myArrayArtDown = [];
let myArrayEduUp = [];
let myArrayEduDown = [];
let myArrayNaturalUp = [];
let myArrayNaturalDown = [];
let myArrayTecUp = [];
let myArrayTecDown = [];

function onLoadInternationalFunctionUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrInterNationalNewsUp.push(repo);
    });
}

function onLoadInternationalFunctionDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrInterNationalNewsDown.push(repo);
    });
}

function onLoadUKUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayUKUp.push(repo);
    });
}

function onLoadusaUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayUsaUp.push(repo);
    });
}

function onLoadEduUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayEduUp.push(repo);
    });
}

function onLoadTecUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayTecUp.push(repo);
    });
}

function onLoadNatureUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayNaturalUp.push(repo);
    });

}

function onLoadSportUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArraySprotUp.push(repo);
    });
}

function onLoadEconomicUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayEcoUp.push(repo);
    });
}

function onLoadArtUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayArtUp.push(repo);
    });

}

function onLoadInternationalFunctionDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrInterNationalNewsDown.push(repo);
    });
}

function onLoadUKDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayUKDowun.push(repo);
    });
}

function onLoadusaDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayUsaDown.push(repo);
    });
}

function onLoadEduDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayEduDown.push(repo);
    });
}

function onLoadTecDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayTecDown.push(repo);
    });
}

function onLoadSportDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArraySprotDoen.push(repo);
    });
}

function onLoadNatureDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayNaturalDown.push(repo);
    });
}

function onLoadEconomicDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    respoArray.forEach(function(repo) {
        myArrayEcoDowun.push(repo);
    });
}
// International News Functions ===========================================
// app.get('/', function(req, res) {
//     // res.render('index', {
//     //     InterNationalArr: myArrInterNationalNewsUp,
//     //     InterNationalArrTwo: myArrInterNationalNewsDown
//     // })
//     app.post('/', function(req, res) {

//         const filePath = __dirname + '/data/posts.json';

//         const cb = function(error, file) {
//             // we call .toString() to turn the file buffer to a String
//             const fileData = file.toString();
//             // we use JSON.parse to get an object out the String
//             const postsJson = JSON.parse(fileData);
//             // add new post to the file
//             postsJson.push(req.body);

//             // write back to file
//             fs.writeFile(filePath, JSON.stringify(postsJson), (err) => {
//                 if (err) throw err;
 //             });

//             res.end("Success.");
//         };

//         fs.readFile(filePath, cb);

//     });



// })
const loadReposFunction = (myUrl, directions, option) => {
    var url = myUrl;
    var oReq = new XMLHttpRequest();
    if (directions === "up") {
        if (option === "international") {
            oReq.addEventListener('load', onLoadInternationalFunctionUp);
        } else if (option === "uk") {
            oReq.addEventListener('load', onLoadUKUp);

        } else if (option === "usa") {
            oReq.addEventListener('load', onLoadusaUp);

        } else if (option === "education") {
            oReq.addEventListener('load', onLoadEduUp);

        } else if (option === "tec") {
            oReq.addEventListener('load', onLoadTecUp);
        } else if (option === "nature") {
            oReq.addEventListener('load', onLoadNatureUp);

        } else if (option === "sport") {
            oReq.addEventListener('load', onLoadSportUp);
        } else if (option === "economicUp") {
            oReq.addEventListener('load', onLoadEconomicUp);

        } else if (option === "art") {
            oReq.addEventListener('load', onLoadArtUp);

        }
    } else if (directions === "down") {
        if (option === "international") {
            oReq.addEventListener('load', onLoadInternationalFunctionDown);
        } else if (option === "uk") {
            oReq.addEventListener('load', onLoadUKDown);

        } else if (option === "usa") {
            oReq.addEventListener('load', onLoadusaDown);

        } else if (option === "education") {
            oReq.addEventListener('load', onLoadEduDown);

        } else if (option === "tec") {
            oReq.addEventListener('load', onLoadTecDown);
        } else if (option === "nature") {
            oReq.addEventListener('load', onLoadNatureDown);

        } else if (option === "sport") {
            oReq.addEventListener('load', onLoadSportDown);
        } else if (option === "economicUp") {
            oReq.addEventListener('load', onLoadEconomicDown);

        }
    }
    oReq.open('GET', url);
    oReq.send();
}
module.exports = {
  onLoadInternationalFunctionUp,
  onLoadInternationalFunctionDown,
  onLoadUKUp,
  onLoadusaUp,
  onLoadEduUp,
  onLoadTecUp,
  onLoadNatureUp,
  onLoadSportUp,
  onLoadEconomicUp,
  onLoadArtUp,
  onLoadInternationalFunctionDown,
  onLoadUKDown,
  onLoadusaDown,
  onLoadEduDown,
  onLoadTecDown,
  onLoadSportDown,
  onLoadNatureDown,
  onLoadEconomicDown,
  loadReposFunction,
  myArrInterNationalNewsUp,
  myArrInterNationalNewsDown,
  myArrayUKUp,
  myArrayUKDowun,
  myArrayUsaUp,
  myArrayUsaDown,
  myArrayEcoUp,
  myArrayEcoDowun,
  myArraySprotUp,
  myArraySprotDoen,
  myArrayArtUp,
  myArrayArtDown,
  myArrayEduUp,
  myArrayEduDown,
  myArrayNaturalUp,
  myArrayNaturalDown,
  myArrayTecUp,
  myArrayTecDown
};
