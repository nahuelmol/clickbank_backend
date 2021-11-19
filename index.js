const app = require("./server");

require('dotenv').config();
require('./db/conn');

const PORT      = process.env.PORT;
const localhost = process.env.LOCAL_HOST;
const redhost   = process.env.RED_HOST;

const port 		= PORT || 8000


if(module.parent == null){
	app.listen(port,()=> {
		console.log('Listening on: ' + port)
	})
}
	