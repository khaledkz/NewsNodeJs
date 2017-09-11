const siteController = require("./siteController");
const express = require("express");
const app = express();
const formidable = require("express-formidable");
const fs = require('fs');
const exphbs = require('express-handlebars');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var bodyParser = require('body-parser');
 const router = express.Router();
 // Load the SDK for JavaScript
 const AWS = require('aws-sdk');

 // Load credentials and set region from JSON file
 AWS.config.loadFromPath('config.json');

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

siteController.loadReposFunction(aljazeraAPIUp, "up", "international");
siteController.loadReposFunction(associatedPressAPI, "up", "international");
siteController.loadReposFunction(BloomingAPI, "up", "international");
siteController.loadReposFunction(BbcNewsAPI, "up", "uk");
siteController.loadReposFunction(dailyMailAPI, "up", "uk");
siteController.loadReposFunction(FinancialTimesAPI, "up", "uk");
siteController.loadReposFunction(IndependentAPI, "up", "uk");
siteController.loadReposFunction(MetroAPI, "up", "uk");
siteController.loadReposFunction(TelegraphAPI, "up", "uk");
siteController.loadReposFunction(FinancialTimesAPITwo, "down", "uk");
siteController.loadReposFunction(MetroAPITwo, "down", "uk");
siteController.loadReposFunction(AbcNewsAPI, "up", "usa");
siteController.loadReposFunction(cnnAPI, "up", "usa");
siteController.loadReposFunction(usaToday, "up", "usa");
siteController.loadReposFunction(timeNews, "up", "usa");
siteController.loadReposFunction(newYorkMagzine, "up", "usa");
siteController.loadReposFunction(usaTodayTwo, "down", "usa");
siteController.loadReposFunction(newYorkMagzineTwo, "down", "usa");
siteController.loadReposFunction(timeNewsTwo, "down", "usa");
siteController.loadReposFunction(ArsTecAPI, "up", "tec");
siteController.loadReposFunction(recodeAPI, "up", "tec");
siteController.loadReposFunction(EngandetAPI, "up", "tec");
siteController.loadReposFunction(hackerNewsAPI, "up", "tec");
siteController.loadReposFunction(TechChorch, "up", "tec");
siteController.loadReposFunction(TechRadarAPI, "up", "tec");
siteController.loadReposFunction(TheNextWebAPI, "up", "tec");
siteController.loadReposFunction(ArsTecAPITwo, "down", "tec");
siteController.loadReposFunction(EngandetAPITwo, "down", "tec");
siteController.loadReposFunction(TechChorchTwo, "down", "tec");
siteController.loadReposFunction(TechRadarTwoAPI, "down", "tec");
siteController.loadReposFunction(businessInsiderAPI, "up", "economicUp");
siteController.loadReposFunction(businessInsiderUKAPI, "up", "economicUp");
siteController.loadReposFunction(BuzFeexAPI, "up", "economicUp");
siteController.loadReposFunction(gruenderszen, "up", "economicUp");
siteController.loadReposFunction(businessInsiderAPITwo, "down", "economicUp");
siteController.loadReposFunction(BuzFeexAPITwo, "down", "economicUp");
siteController.loadReposFunction(gruenderszenTwo, "down", "economicUp");
siteController.loadReposFunction(BbcSportAPI, "up", "sport");
siteController.loadReposFunction(espnAPI, "up", "sport");
siteController.loadReposFunction(espnTwoAPI, "up", "sport");
siteController.loadReposFunction(espnThreeAPI, "up", "sport");
siteController.loadReposFunction(FoxSportAPI, "up", "sport");
siteController.loadReposFunction(FoxSportAPITwo, "down", "sport");
siteController.loadReposFunction(FootballItliaAPI, "down", "sport");
siteController.loadReposFunction(FootballItliaAPITwo, "down", "sport");
siteController.loadReposFunction(newscience, "up", "education");
siteController.loadReposFunction(nationalGraphicAPI, "up", "nature");
siteController.loadReposFunction(EntertianmentWeekAPI, "up", "art");
siteController.loadReposFunction(aljazeraAPIUpTwo, "down", "international");
siteController.loadReposFunction(TelegraphAPITwo, "down", "international");
siteController.loadReposFunction(dailyMailAPITwo, "down", "international");

router.get('/', function(req, res) {
    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName: "NewsData",
        ProjectionExpression: "title,summary,Description,author,image",
    };
     docClient.scan(params, onScan);
    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
                 data.Items.forEach(function(post) {
                        });
            res.render('index', {
                InterNationalArr: siteController.myArrInterNationalNewsUp,
                InterNationalArrTwo: siteController.myArrInterNationalNewsDown,
                posts: data.Items
            });
        }
    }
});
router.get('/sport', function(req, res) {
    res.render('sport', {
        sportArr: siteController.myArraySprotUp,
        sportArrTwo: siteController.myArraySprotDoen
    })
})
router.get('/tec', function(req, res) {
    res.render('tec', {
        tecArr: siteController.myArrayTecUp,
        tecArrTwo: siteController.myArrayTecDown
    })

})
router.get('/uk', function(req, res) {
    res.render('uk', {
        UkArrUp: siteController.myArrayUKUp,
        UkArrDown: siteController.myArrayUKDowun
    })

})
router.get('/usa', function(req, res) {
    res.render('usa', {
        usaArr: siteController.myArrayUsaUp,
        usaArrTwo: siteController.myArrayUsaDown
    })

})
router.get('/art', function(req, res) {
    res.render('art', {
        artUp: siteController.myArrayArtUp
    })
})

router.get('/natural', function(req, res) {
    res.render('nature', {
        natureArr: siteController.myArrayNaturalUp
    })
})
router.get('/eco', function(req, res) {
    res.render('eco', {
        ecoupArr: siteController.myArrayEcoUp,
        ecoTwoArr: siteController.myArrayEcoDowun

    })
})
router.get('/edu', function(req, res) {
    res.render('edu', {
        eduarr: siteController.myArrayEduUp,
        eduArrTwo: siteController.myArrayEduDown
    })
})
module.exports = router;
