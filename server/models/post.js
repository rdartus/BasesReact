//Dependencies
var mongoose = require('mongoose');
var returned= mongoose.model;
//Schema
var post_schema =new mongoose.Schema(
{
	post_code:String,
	post_caption:String,
	post_likes:Number,
	post_id:Number,
	post_display_src:String
}
);



returned = mongoose.model('posts',post_schema);

module.exports = returned;
