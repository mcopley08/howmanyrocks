var express = require('express');
var request = require('request'); // "Request" library
var querystring = require('querystring');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').createServer(app);
var http_obj = require('http');
// io = require('socket.io')(http);

var Logger = require('le_node');
// var log = new Logger({
//   token:'0193579f-077a-32d5-8b82-f668588330d8'
// });

// parse application/json
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./models/userProgress');
require('./routes')(app);

mongoose = require('mongoose'),
fs = require('fs');
UserProgress = mongoose.model('UserProgress');

// connecting to the mongodb database

// var mongoUri = 'MONGO_URI';
// var options = { server: { socketOptions: { connectTimeoutMS: 25000 }}}; 

// mongoose.connect(mongoUri, options, function(err) {
// 	if (err) {
//   	  throw new Error('unable to connect to database at ' + mongoUri);
// 	}
// 	else {
// 		console.log('successfully connected to the mongodb database in the cloud');
// 	}
// });

// var db = mongoose.connection;
// db.on('error', function () {
//   throw new Error('unable to connect to database at ' + mongoUri);
// });

// ************* defining routes that AREN'T part fo the API ****************
var router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


// ACTUAL ROUTES
app.get('/', function(req, res) {

  // MongoDB call for geolocations of all rocks

  // Call for most popular and/or recent rocks

  // Call for the total number of rocks (or infer from previous call)

  res.render('index', {
    'geo_locations': [],
    'most_popular_rocks': [],
    'total_num_rocks': 7
  });
});


// ************************ Listening on Port 8080 ******************
// app.listen(process.env.PORT || 8080);
// console.log('listening on port 8080... hahaha...');

http.listen(process.env.PORT || 8080, function(){
  console.log('Listening on port 8080...');
});

