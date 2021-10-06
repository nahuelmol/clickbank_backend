const { Router } 	= require('express');
const routes 		= Router();

const {
	LogoutView,
	LoginView,
	RegisterView,
	DescriptionViewRetrieve,
	DescriptionViewList,
	BookRegisterView,
	UserViewRetrieve,
} = require('./api');

routes.get('/logout',	LogoutView);
routes.post('/login',	LoginView);
routes.post('/register',	RegisterView);
routes.get('/profile',		UserViewRetrieve);

routes.get('/description/:id', 	DescriptionViewRetrieve);
routes.get('/description', 		DescriptionViewList);
routes.post('/book_create',		BookRegisterView);

module.exports = routes;