//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var comment_schema =new mongoose.Schema(
{
				post_message : String,
				user_name : String,

}
);



//Return model
module.exports = restful.model('comment', comment_schema);
