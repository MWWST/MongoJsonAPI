var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date}
})

mongoose.model('Person',PersonSchema) // set the schema in our models as User
var Person = mongoose.model('Person');
module.exports=Person;