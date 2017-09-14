var async = require('async');

var kfcColl= require('../models/schema.js').chicken;
var mcdColl= require('../models/schema.js').mutton;

function getParallel(cb){
	var retObj ={};
	async.parallel({
		one: function(cb1){
			kfcColl.find({},function(err,cdocs){
				cb1(null,cdocs)
			});
		},

		two: function(cb2){
			mcdColl.find({},function(err,mdocs){
				cb2(null,mdocs)
			});
		}
	},

	function(err, results){
		if(err){
			retObj.status = false;
			retObj.message = 'Error';
			cb(retObj);
		}else{
			console.log(results)
			retObj.message = 'Success';
			retObj.output = results.one.concat(results.two);
			retObj.status = true;
			cb(retObj);
		}
	});

}
module.exports = getParallel;