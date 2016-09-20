//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

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



//Return model
module.exports = restful.model('post', post_schema);
