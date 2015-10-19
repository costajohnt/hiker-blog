//REQUIREMENTS
var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var db = require('./models');

//CONFIG
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use(express.static("public"));
// body parser config to accept our datatypes
// app.use(bodyParser.urlencoded({extended: true}));

//mongoose.connect('mongodb://localhost/micro-blog-part2');

//ROUTES

app.get('/', function (req, res) {
  res.send("Im Alive!");
  });

app.listen(3000, function (){
  console.log("listening on port 3000");
});


// db.Hike.find().exec( function (error, hikesFound){
// 	res.render('index',{ hikes : hikesFound});