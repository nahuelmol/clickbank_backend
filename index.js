const app = require("./server");

require('dotenv').config();
require('./db/conn');

const PORT      = process.env.PORT;
const localhost = process.env.LOCAL_HOST;
const redhost   = process.env.RED_HOST;


app.set('port', PORT || 8000)

if(module.parent == null){
	app.listen(app.get('port'), _ => console.log(`Listening on: ${localhost}:${app.get('port')}`))
}
	