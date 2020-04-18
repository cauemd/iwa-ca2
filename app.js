//creating variables for dependencies
var logger = require("morgan"),
    cors = require("cors"),
    http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    expAutoSan = require("auto-sanitize"),
    mongoose = require('mongoose');

//setting up express to handle the app endpoints (URIs)
var app = express();

//Setting the port to either the environment port or 3000
var port = process.env.PORT || 3000;

//Creating controller to handle monster data
var monsterCtrl = require('./monster-controller');

//using auto-sanitizer to treat all data from the forms in the front end
app.use(expAutoSan.allUnsafe);

//Making our Express server use morgan to log things in the console
app.use(logger('dev'));
//Using a body-parser to parse json in the requests
app.use(bodyParser.json());
app.use(require('./routes'));

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

//creating our connection to the mongoDB in Atlas cloud. Environmental variables must be used instead, so the authentication keys to the
//database are not visible in our file
mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});