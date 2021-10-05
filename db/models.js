const mongoose 	= require('mongoose');
const Schema	= mongoose.Schema;

var BookSchema	= new Schema({
	title:String,
	author:String,
	email:String,
	direct_link:String,
	description:String
})

var CommentSchema = new Schema({
	author:String,
	date:String,
	likes:Number,
	shares:Number
})

var UserSchema = new Schema({
	name:String,
	last_name:String,
	password:String,
	email:String,
	age:Number
})

const BookModel 	= mongoose.model('Book', 	BookSchema);
const CommentModel 	= mongoose.model('Comment', CommentSchema);
const UserModel 	= mongoose.model('User',	UserSchema);

module.exports = {
	BookModel,
	CommentSchema,
	UserModel
};

