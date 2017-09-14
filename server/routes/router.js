var express = require("express");
var router = express.Router()

var parallel=require('../modules/async-parallel.js');
var series=require('../modules/async-parallel.js');


router.get('/parallel', function(req,res){
	parallel(function(result){
		res.json(result);
	});
});


router.get('/series', function(req,res){
	series(function(result){
		res.json(result);
	});
});
module.exports=router;