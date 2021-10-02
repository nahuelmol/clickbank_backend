const mongoose 	= require('mongoose');
const configs	= require('../config/configs');
const BookModel = require('./models.js')

const data	= require('../db/models').data;
const db_config = configs.db_config;

const url		= 'mongodb://localhost:27017/CBProducts' //add the port where mongoose is running

mongoose.connect(url, db_config)
	.then(db => {console.log('db connected')})
	.catch(err => {console.log(err)});



