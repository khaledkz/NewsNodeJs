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

// API KEYS START
//international news
const aljazeraAPIUp = "https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const aljazeraAPIUpTwo = "https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const associatedPressAPI = "https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BloomingAPI = "https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
//uk news
const BbcNewsAPI = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BbcNewsAPITwo = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const dailyMailAPI = "https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const dailyMailAPITwo = "https://newsapi.org/v1/articles?source=daily-mail&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FinancialTimesAPI = "https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FinancialTimesAPITwo = "https://newsapi.org/v1/articles?source=financial-times&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const IndependentAPI = "https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const IndependentAPITwo = "https://newsapi.org/v1/articles?source=independent&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const MetroAPI = "https://newsapi.org/v1/articles?source=metro&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const MetroAPITwo = "https://newsapi.org/v1/articles?source=metro&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TelegraphAPI = "https://newsapi.org/v1/articles?source=the-telegraph&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TelegraphAPITwo = "https://newsapi.org/v1/articles?source=the-telegraph&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
//USA news
const AbcNewsAPI = "https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const AbcNewsAPITwo = "https://newsapi.org/v1/articles?source=abc-news-au&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const cnnAPI = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const cnnAPITwo = "https://newsapi.org/v1/articles?source=cnn&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const usaToday = "https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
//Economic news
const businessInsiderAPI = "https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const businessInsiderAPITwo = "https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const businessInsiderUKAPI = "https://newsapi.org/v1/articles?source=business-insider-uk&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const businessInsiderUKAPITwo = "https://newsapi.org/v1/articles?source=business-insider-uk&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BuzFeexAPI = "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BuzFeexAPITwo = "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const cnbcAPI = "https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const gruenderszen = "https://newsapi.org/v1/articles?source=gruenderszene&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874"
const gruenderszenTwo = "https://newsapi.org/v1/articles?source=gruenderszene&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874"
    //sport news
const BbcSportAPI = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const BbcSportAPITwo = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const espnAPI = "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const espnTwoAPI = "https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const espnThreeAPI = "https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FoxSportAPI = "https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FoxSportAPITwo = "https://newsapi.org/v1/articles?source=fox-sports&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FootballItliaAPI = "https://newsapi.org/v1/articles?source=football-italia&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const FootballItliaAPITwo = "https://newsapi.org/v1/articles?source=football-italia&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
//Art news
const EntertianmentWeekAPI = "https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
//Tecno
const ArsTecAPI = "https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const ArsTecAPITwo = "https://newsapi.org/v1/articles?source=ars-technica&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const recodeAPI = "https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const EngandetAPI = "https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const EngandetAPITwo = "https://newsapi.org/v1/articles?source=engadget&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const hackerNewsAPI = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const hackerNewsTwoAPI = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TechChorch = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TechChorchTwo = " https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TechRadarAPI = "https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TechRadarTwoAPI = "https://newsapi.org/v1/articles?source=techradar&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const TheNextWebAPI = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
// germany
const buildAPI = "https://newsapi.org/v1/articles?source=bild&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const buildAPITwo = "https://newsapi.org/v1/articles?source=bild&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
//Natural
const nationalGraphicAPI = "https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874"
    //Education
const newscience = "https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
// API KEYS END


// International News Functions ===========================================
const loadReposFunction = (myUrl, directions, option) => {
    var url = myUrl;
    var oReq = new XMLHttpRequest();
    if (directions === "up") {
        if (option === "international") {
            oReq.addEventListener('load', onLoadInternationalFunctionUp);
        }
    } else if (directions === "down") {
        if (option === "international") {

            oReq.addEventListener('load', onLoadInternationalFunctionDown);
        }
    }
    oReq.open('GET', url);
    oReq.send();
}


loadReposFunction(aljazeraAPIUp, "up", "international");
loadReposFunction(associatedPressAPI, "up", "international");
loadReposFunction(BloomingAPI, "up", "international");

loadReposFunction(aljazeraAPIUpTwo, "down", "international");
loadReposFunction(TelegraphAPITwo, "down", "international");
loadReposFunction(dailyMailAPITwo, "down", "international");

let myArrInterNationalNewsUp = [];
let myArrInterNationalNewsDown = [];

function onLoadInternationalFunctionUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrInterNationalNewsUp.push(repo);
    });
}

function onLoadInternationalFunctionDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrInterNationalNewsDown.push(repo);
    });
}

// International News Functions ===========================================

app.get('/', function(req, res) {
    res.render('index', {
        InterNationalArr: myArrInterNationalNewsUp,
        InterNationalArrTwo: myArrInterNationalNewsDown
    })

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