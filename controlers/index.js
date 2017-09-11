const dbClient = require("dbClient");
const express = require("express");
const app = express();
const formidable = require("express-formidable");
const fs = require('fs');
const exphbs = require('express-handlebars');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var bodyParser = require('body-parser');

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
const cnnAPI = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const usaToday = "https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const usaTodayTwo = "https://newsapi.org/v1/articles?source=usa-today&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const newYorkMagzine = "https://newsapi.org/v1/articles?source=new-york-magazine&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const newYorkMagzineTwo = "https://newsapi.org/v1/articles?source=new-york-magazine&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
const timeNews = "https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=32444f5d6e724ace8328a2fefa63e874";
const timeNewsTwo = "https://newsapi.org/v1/articles?source=time&sortBy=latest&apiKey=32444f5d6e724ace8328a2fefa63e874";
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

dbClient.loadReposFunction(aljazeraAPIUp, "up", "international");
dbClient.loadReposFunction(associatedPressAPI, "up", "international");
dbClient.loadReposFunction(BloomingAPI, "up", "international");
dbClient.loadReposFunction(BbcNewsAPI, "up", "uk");
dbClient.loadReposFunction(dailyMailAPI, "up", "uk");
dbClient.loadReposFunction(FinancialTimesAPI, "up", "uk");
dbClient.loadReposFunction(IndependentAPI, "up", "uk");
dbClient.loadReposFunction(MetroAPI, "up", "uk");
dbClient.loadReposFunction(TelegraphAPI, "up", "uk");
dbClient.loadReposFunction(FinancialTimesAPITwo, "down", "uk");
dbClient.loadReposFunction(MetroAPITwo, "down", "uk");
dbClient.loadReposFunction(AbcNewsAPI, "up", "usa");
dbClient.loadReposFunction(cnnAPI, "up", "usa");
dbClient.loadReposFunction(usaToday, "up", "usa");
dbClient.loadReposFunction(timeNews, "up", "usa");
dbClient.loadReposFunction(newYorkMagzine, "up", "usa");
dbClient.loadReposFunction(usaTodayTwo, "down", "usa");
dbClient.loadReposFunction(newYorkMagzineTwo, "down", "usa");
dbClient.loadReposFunction(timeNewsTwo, "down", "usa");
dbClient.loadReposFunction(ArsTecAPI, "up", "tec");
dbClient.loadReposFunction(recodeAPI, "up", "tec");
dbClient.loadReposFunction(EngandetAPI, "up", "tec");
dbClient.loadReposFunction(hackerNewsAPI, "up", "tec");
dbClient.loadReposFunction(TechChorch, "up", "tec");
dbClient.loadReposFunction(TechRadarAPI, "up", "tec");
dbClient.loadReposFunction(TheNextWebAPI, "up", "tec");
dbClient.loadReposFunction(ArsTecAPITwo, "down", "tec");
dbClient.loadReposFunction(EngandetAPITwo, "down", "tec");
dbClient.loadReposFunction(TechChorchTwo, "down", "tec");
dbClient.loadReposFunction(TechRadarTwoAPI, "down", "tec");
dbClient.loadReposFunction(businessInsiderAPI, "up", "economicUp");
dbClient.loadReposFunction(businessInsiderUKAPI, "up", "economicUp");
dbClient.loadReposFunction(BuzFeexAPI, "up", "economicUp");
dbClient.loadReposFunction(gruenderszen, "up", "economicUp");
dbClient.loadReposFunction(businessInsiderAPITwo, "down", "economicUp");
dbClient.loadReposFunction(BuzFeexAPITwo, "down", "economicUp");
dbClient.loadReposFunction(gruenderszenTwo, "down", "economicUp");
dbClient.loadReposFunction(BbcSportAPI, "up", "sport");
dbClient.loadReposFunction(espnAPI, "up", "sport");
dbClient.loadReposFunction(espnTwoAPI, "up", "sport");
dbClient.loadReposFunction(espnThreeAPI, "up", "sport");
dbClient.loadReposFunction(FoxSportAPI, "up", "sport");
dbClient.loadReposFunction(FoxSportAPITwo, "down", "sport");
dbClient.loadReposFunction(FootballItliaAPI, "down", "sport");
dbClient.loadReposFunction(FootballItliaAPITwo, "down", "sport");
dbClient.loadReposFunction(newscience, "up", "education");
dbClient.loadReposFunction(nationalGraphicAPI, "up", "nature");
dbClient.loadReposFunction(EntertianmentWeekAPI, "up", "art");
dbClient.loadReposFunction(aljazeraAPIUpTwo, "down", "international");
dbClient.loadReposFunction(TelegraphAPITwo, "down", "international");
dbClient.loadReposFunction(dailyMailAPITwo, "down", "international");

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

app.get('/', function(req, res) {

    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName: "NewsData",
        ProjectionExpression: "title,summary,Description,author,image",
    };

    console.log("Scanning posts table.");
    docClient.scan(params, onScan);

    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            // print all the posts
            console.log("Scan succeeded.");

            // Here you can test how to access the posts, not needed for the functionality to work, so could be deleted
            data.Items.forEach(function(post) {
                console.log(
                    post.title + ": ",
                    post.author, "- content:", post.Description, post.image);
            });

            res.render('index', {
                InterNationalArr: myArrInterNationalNewsUp,
                InterNationalArrTwo: myArrInterNationalNewsDown,
                posts: data.Items
            });
        }
    }
});
app.get('/sport', function(req, res) {
    res.render('sport', {
        sportArr: myArraySprotUp,
        sportArrTwo: myArraySprotDoen
    })
})
app.get('/tec', function(req, res) {
    res.render('tec', {
        tecArr: myArrayTecUp,
        tecArrTwo: myArrayTecDown
    })

})
app.get('/uk', function(req, res) {
    res.render('uk', {
        UkArrUp: myArrayUKUp,
        UkArrDown: myArrayUKDowun
    })

})
app.get('/usa', function(req, res) {
    res.render('usa', {
        usaArr: myArrayUsaUp,
        usaArrTwo: myArrayUsaDown
    })

})
app.get('/art', function(req, res) {
    res.render('art', {
        artUp: myArrayArtUp
    })
})

app.get('/natural', function(req, res) {
    res.render('nature', {
        natureArr: myArrayNaturalUp
    })
})
app.get('/eco', function(req, res) {
    res.render('eco', {
        ecoupArr: myArrayEcoUp,
        ecoTwoArr: myArrayEcoDowun

    })
})
app.get('/edu', function(req, res) {
    res.render('edu', {
        eduarr: myArrayEduUp,
        eduArrTwo: myArrayEduDown
    })
})
moduel.export = app;
