const mongoose 	= require('mongoose');
const Schema	= mongoose.Schema;

var BookSchema	= new Schema({
	title:String,
	author:String,
	gender:String,
	email:String,
	direct_link:String,
	description:String,
	prize:Number,
	stock:Number,
	pages:Number
})

var CommentSchema = new Schema({
	author:String,
	date:String,
	likes:Number,
	shares:Number,
	content:String
})

var UserSchema = new Schema({
	name:String,
	last_name:String,
	password:String,
	email:String,
	age:Number,
	content:String
})

const BookModel 	= mongoose.model('Book', 	BookSchema);
const CommentModel 	= mongoose.model('Comment', CommentSchema);
const UserModel 	= mongoose.model('User',	UserSchema);

module.exports = {
	BookModel,
	CommentSchema,
	UserModel
};

