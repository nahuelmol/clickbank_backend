
const HomePageView = (req,res) => {
	const user_token = req.headers.cookie;

	if(!user_token){
		res.end('You need to be logged in');
	}

	res.end('This is the homepage');
}

const FeedView = (req,res) => {
	const user_token = req.headers.cookie;

	if(!user_token){
		res.end('Do you want be logged in this site?');
	}

	res.end('this is the feed page');
}

const UserView = (req,res) => {
	const user_token = req.headers.cookie;

	if(!user_token){
		res.end('Do you want be logged in this site?');
	}

	res.end('this is the userview page');
}

module.exports = {
	HomePageView: HomePageView,
	FeedView:FeedView
}