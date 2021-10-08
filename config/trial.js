
var main = () => {
	console.log('----------------------------')
	console.log("name:"+process.env.npm_package_name)
	console.log("version:"+process.env.npm_package_version)
	console.log('----------------------------')
}

var aray 	= []
var ID 		= module.parent.id;

if(ID.includes('\\')){
	array = ID.split('node_modules')
	array[1]
	}


if(array[1] == '\\absolute\\index.js'){
	console.log('trial: Utilizing the absolute package for requiring trial')
	main()
}else{
	console.log(ID)
}
		
