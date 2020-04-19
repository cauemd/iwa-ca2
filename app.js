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

app.use(express.static('./front-end'));

//We allow the data sent from the client to be coming in as part of the URL in GET and POST requests
app.use(express.urlencoded({ extended: true }));

//We include support for JSON that is coming from the client
app.use(express.json());


//setting up path for the index page
app.get('/', function (req, res) {

    res.render('index');

})

//Setting the port to either the environment port or 3000
var port = process.env.PORT || 3000;

//using auto-sanitizer to treat all data from the forms in the front end
//app.use(expAutoSan.allUnsafe);

//Making our Express server use morgan to log things in the console
app.use(logger('dev'));

//Using a body-parser to parse json in the requests
app.use(bodyParser.json());
app.use(require('./routes'));

app.listen(port, function (err) {
    console.log("Listening on Port: " + port)
});

// creating our connection to the mongoDB in Atlas cloud. Environmental variables must be used instead, so the authentication keys to the
//database are not visible in our file
mongoose.connect('mongodb+srv://myUser:yh1DaSDCWT3dvoe8@cluster0-wzrhk.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB is successfully connected');
});