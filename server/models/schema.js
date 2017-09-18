var mongoose=require("mongoose");
var Schema =mongoose.Schema;

var config = require('./../config/config');
mongoose.connect(config.mongo.url);
var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Error connecting to Mongo', err)
})

db.once('open', function() {
	console.log('Connected to MONGODB')
})

var chickenSchema = new Schema({
	Name:String,
	age:Number,
	price:Number,
	psw:String
});

var muttonSchema = new Schema({
	Name:String,
	age:Number,
	price:Number,
	psw:String
});

var chickCollection = mongoose.model("chickdata",chickenSchema, 'chickdata');
var muttCollection = mongoose.model("muttdata",muttonSchema, 'muttdata');

module.exports={
	chicken: chickCollection,
	mutton: muttCollection

};