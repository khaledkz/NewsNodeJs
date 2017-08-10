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

        } else if (option === "artup") {
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

loadReposFunction(aljazeraAPIUp, "up", "international");
loadReposFunction(associatedPressAPI, "up", "international");
loadReposFunction(BloomingAPI, "up", "international");

loadReposFunction(BbcNewsAPI, "up", "uk");
loadReposFunction(dailyMailAPI, "up", "uk");
loadReposFunction(FinancialTimesAPI, "up", "uk");
loadReposFunction(IndependentAPI, "up", "uk");
loadReposFunction(MetroAPI, "up", "uk");
loadReposFunction(TelegraphAPI, "up", "uk");

loadReposFunction(FinancialTimesAPITwo, "down", "uk");
loadReposFunction(MetroAPITwo, "down", "uk");

loadReposFunction(AbcNewsAPI, "up", "usa");
loadReposFunction(cnnAPI, "up", "usa");
loadReposFunction(usaToday, "up", "usa");
loadReposFunction(timeNews, "up", "usa");
loadReposFunction(newYorkMagzine, "up", "usa");

loadReposFunction(usaTodayTwo, "down", "usa");
loadReposFunction(newYorkMagzineTwo, "down", "usa");
loadReposFunction(timeNewsTwo, "down", "usa");

loadReposFunction(ArsTecAPI, "up", "tec");
loadReposFunction(recodeAPI, "up", "tec");
loadReposFunction(EngandetAPI, "up", "tec");
loadReposFunction(hackerNewsAPI, "up", "tec");
loadReposFunction(TechChorch, "up", "tec");
loadReposFunction(TechRadarAPI, "up", "tec");
loadReposFunction(TheNextWebAPI, "up", "tec");

loadReposFunction(ArsTecAPITwo, "down", "tec");
loadReposFunction(EngandetAPITwo, "down", "tec");
loadReposFunction(TechChorchTwo, "down", "tec");
loadReposFunction(TechRadarTwoAPI, "down", "tec");


loadReposFunction(businessInsiderAPI, "up", "economicUp");
loadReposFunction(businessInsiderUKAPI, "up", "economicUp");
loadReposFunction(BuzFeexAPI, "up", "economicUp");
loadReposFunction(gruenderszen, "up", "economicUp");

loadReposFunction(businessInsiderAPITwo, "down", "economicUp");
loadReposFunction(BuzFeexAPITwo, "down", "economicUp");
loadReposFunction(gruenderszenTwo, "down", "economicUp");


loadReposFunction(BbcSportAPI, "up", "sport");
loadReposFunction(espnAPI, "up", "sport");
loadReposFunction(espnTwoAPI, "up", "sport");
loadReposFunction(espnThreeAPI, "up", "sport");
loadReposFunction(FoxSportAPI, "up", "sport");

loadReposFunction(FoxSportAPITwo, "down", "sport");
loadReposFunction(FootballItliaAPI, "down", "sport");
loadReposFunction(FootballItliaAPITwo, "down", "sport");





// BbcNewsAPITwo
// dailyMailAPITwo
// FinancialTimesAPITwo
// IndependentAPITwo
// MetroAPITwo
// TelegraphAPITwo

loadReposFunction(aljazeraAPIUpTwo, "down", "international");
loadReposFunction(TelegraphAPITwo, "down", "international");
loadReposFunction(dailyMailAPITwo, "down", "international");

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

let myArrayAtyUp = [];
let myArrayArtDown = [];

let myArrayEduUp = [];
let myArrayEduDown = [];

let myArrayNaturalUp = [];
let myArrayNaturalDown = [];

let myArrayTecUp = [];
let myArrayTecDown = [];

let myArrayArtUp = [];

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


function onLoadUKUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUKUp.push(repo);
    });
}

function onLoadusaUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUsaUp.push(repo);
    });
}

function onLoadEduUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayEduUp.push(repo);
    });
}

function onLoadTecUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayTecUp.push(repo);
    });
}



function onLoadNatureUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayNaturalUp.push(repo);
    });
}

function onLoadSportUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArraySprotUp.push(repo);
    });
}


function onLoadEconomicUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayEcoUp.push(repo);
    });
}

function onLoadArtUp() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayArtUp.push(repo);
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

function onLoadUKDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayUKDowun.push(repo);
    });
    console.log(myArrayUKDowun)
}

function onLoadusaDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${refunction onLoadInternationalFunctionUp() {
    respoArray.forEach(function(repo) {
        myArrayUsaDown.push(repo);
    });
}

function onLoadEduDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayEduDown.push(repo);
    });

}

function onLoadTecDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayTecDown.push(repo);
    });
}

function onLoadSportDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArraySprotDoen.push(repo);
    });
}

function onLoadNatureDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayNaturalDown.push(repo);
    });
}

function onLoadEconomicDown() {
    const text = this.responseText;
    const reposInfo = JSON.parse(text);
    const respoArray = reposInfo.articles;
    // console.log(reposInfo.articles);
    // console.log(reposInfo.response.docs[0]); ${repo.title}
    respoArray.forEach(function(repo) {
        myArrayEcoDowun.push(repo);
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
        InterNationalArr: myArrayAtyUp
    })
})

app.get('/natural', function(req, res) {
    res.render('nature', {
        InterNationalArr: myArrayNaturalUp
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
        InterNationalArrTwo: myArrayEduUp
    })
})

app.listen(3000);