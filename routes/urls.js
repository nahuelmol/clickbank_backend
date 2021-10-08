const { Router } 	= require('express');
const routes 		= Router();
const views = require('./views');

routes.get('/homepage', views.HomePageView);
routes.get('/feed',  	views.FeedView);

module.exports = routes;