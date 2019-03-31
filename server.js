const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
//axios scraper
const axios = require('axios');
// jquery for backend
const cheerio = require('cheerio');

//require models
const db = require('./models');
//express server
const app = express();
//local server port
let PORT =process.env.PORT || 8080;




//  //middleware
app.use(logger);

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


//connect online mongolabdb
mongoose.connect(" mongoose.connect('mongodb://princess:rent1234@ds125616.mlab.com:25616/heroku_sk1554w4", {useNewUrlParser: true});

//Create GET route to scrape 
app.get("/scrape", function(req,res){

    //GET request to URL through Axios 
    axios.get('https://m.huffpost.com/us/section/world-news').then(function(response) {
    //load our URL request into server query selector
    let $ = cheerio.load(response.data);

    //Now to grab our article titles displayed within the h2 tags
    $("div h2 ").each(function(i, element){
        //result variable for later
        let result = {};
// append text to every results' title and link
        result.title = $(this)
        .children("a")
        .text();
        result.link = $(this)
        .children("a")
        .attr("href");

        //New Article from result object to be added to database
        db.Artible.create(result)
        .then(function(dbArticle){
            console.log(dbArticle);
        }).catch(function(err) {
        console.log(err);
    });
    });
});
});





















    app.listen(PORT, function(){
    console.log('App running on port' + PORT + "!");
});