var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/nonveg');
var Schema =mongoose.Schema;

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