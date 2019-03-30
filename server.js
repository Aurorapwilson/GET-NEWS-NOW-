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

app.listen(PORT, function(){
    console.log('App running on port' + PORT + "!");
})