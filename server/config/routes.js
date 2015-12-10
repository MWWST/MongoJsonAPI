var people = require('../controllers/people.js');

module.exports = function(app) { 


app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });


app.get('/',function(req,res){

			people.show(req,res);
	})

	app.get('/new/:name',function(req,res){

			people.create(req,res);

	})

	app.get('/remove/:name',function(req,res) {

			people.destroy(req,res);
	})

	app.get('/:name',function(req,res){
			// console.log(req.params);
			people.showOne(req,res);
	})

}
