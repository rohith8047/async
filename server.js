var express =require("express");
var morgan = require('morgan');
var app =express();

var bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(express.static('client', {index: 'views/index.html'}));

var config = require('./server/config/config.js');

var router = require('./server/routes/router.js');
app.use('/api',router);

app.listen(config.port, function() {
	console.log('---running---')
});
