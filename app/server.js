var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Game       = require('./models/Game');
var saveScore    = require('./modules/saveScore');
var viewScores    = require('./modules/viewScores');
var updateScore    = require('./modules/updateScore');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res , next){
	res.header('Access-Control-Allow-Origin' , '*');
	res.header('Access-Control-Allow-Methods' , 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

var port =  3000;
var router = express.Router();

saveScore.savescore(router);
viewScores.viewscores(router);
updateScore.updateScore(router);


router.get('/', function(req, res) {
    res.json({ message: 'welcome to our game' });
});

app.use('/game', router);
mongoose.connect('mongodb://localhost:27017/puzzle');
console.log('connected to Scores database');
app.listen(port);
console.log('server is running on port 3000' );
