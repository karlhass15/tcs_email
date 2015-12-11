var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose =  require('mongoose');

//var gallery = require ('./routes/gallery');
var contact = require('./routes/contact');
var index = require('./routes/index');

//mongoose.connect('mongodb://localhost/email');
app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));


app.use('/contact', contact);
app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening on Port: " + app.get("port"));

});





