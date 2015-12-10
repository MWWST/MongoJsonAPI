var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {

	show: function(req,res){

		Person.find({},function(err,person){
			if(err){
				res.send(err);
			}

			else if(person){
				 res.header("Access-Control-Allow-Origin", "*");
   				 res.header("Access-Control-Allow-Headers", "X-Requested-With");
				res.json(person)


			}

			else {
				res.send('there are no people added to the database yet');
			}
		})

	},

	showOne: function(req,res){
		console.log(req.params);
		Person.find({name:req.params.name},function(err,person){
			if(err){
				res.send(err);
			}
			else if (person){
				res.header("Access-Control-Allow-Origin", "*");
   				 res.header("Access-Control-Allow-Headers", "X-Requested-With");
				res.json(person);
			}

			else {
				res.send('no match');
			}
		})
	},

	create: function(req,res){
		console.log(req.params.name);
		var person = new Person({name:req.params.name})
		person.save(function(err){
			if (err){
				res.send(err);
			}
			else {
				res.redirect('/');
			}
		})
	},

	destroy: function(req,res){
		console.log(req.params.name);
		Person.remove({name:req.params.name},function(err){
			if(err){
				res.send('there was an error:',err);
			}
			else{
				res.redirect('/');
			}
		})
	}
}
