//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var comment_line_schema = new mongoose.Schema(
{
	text : String,
	user : String
})
var comment_schema =new mongoose.Schema(
{
		post_code:String,
		comment_list:[comment_line_schema]
}
);



//Return model
module.exports = restful.model('comments', comment_schema);
