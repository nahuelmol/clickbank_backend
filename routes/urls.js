const { Router } 	= require('express');
const routes 		= Router();
const { HomePageView, FeedView } = require('./views');

routes.get('/homepage', HomePageView);
routes.get('/feed',  	FeedView);

module.exports = routes;