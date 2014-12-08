var data = require('./drive_app_public_data.json')
// console.log(data.items.length)

data.items.forEach(function(app){
	console.log(JSON.stringify(app))
})