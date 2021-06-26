const mongoose 	= require('mongoose');
const Schema	= mongoose.Schema;

var BookSchema	= new Schema({
	title:String,
	author:String,
	direct_link:String,
	description:String
})

var data = [
  {
  	id:1,
    name: "John",
    author: "wick",
    direct_link: "New York",
    description:"something"
  },
  {
  	id:2,
    name: "culo",
    author: "opened",
    direct_link: "csli",
    description:"uff"
  },
  {
  	id:3,
    name: "apeal",
    author: "to you heart",
    direct_link: "good vibes",
    description:"not guts"
  }
  
];

const BookModel = mongoose.model('Book', BookSchema);

module.exports = {
	BookModel,
	data
};

