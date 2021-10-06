
const ImportLocalModule = (module) => {
	var modules = [
		'./config',
		'./db',
		'./routes'
	]

	for(var i = 0;i<modules.length;i++){
		try{
			require(modules[i] + '/index');
		}catch(e){
			console.log(modules[i] + " module does not exists");
		}
	}
	console.log(module);

}

module.exports = ImportLocalModule;