var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Authorization');
    next();
});

var token = require('./routes/TokenRoute')(app);

  //if(env === 'development'){
        // mongoose.connect('mongodb://127.0.0.1/matka');
 //  }else {
     mongoose.connect('mongodb://rldfaridabad:kapil_123@ds261521.mlab.com:61521/timetable');
 //}

// var port = process.env.PORT || 8080;mongodb://<dbuser>:<dbpassword>@ds257851.mlab.com:57851/matka
var port = 8080;

var server = app.listen(port , function () {
  console.log('server listening on '  + server.address().port);
});