var express = require('express');
var router = express.Router();

/* GET home page. */
//Ca ca sert à rien
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Ca c'est si j'utilise un template ejs
router.get('/testEJS',function(req,res,next){
	res.render('vuetest');
}); 

//Ca c'est pour passer un fichier html en direct
router.get('/testHTML',function(req,res,next){
	res.sendfile('./views/vuetest.html');
}); 

router.get('/testAngular',function(req,res,next){
	res.sendfile('./views/testAngular.html');
}); 
//et ça c'est pour passer tous les images qui sont dans public
//On poourrait voir pour stocker par module mais fare un routeru général
/*
router.get('/img/:name', function (req, res, next) {
	console.log("je te vois");
	res.send("tu veux une image?");
	var options = {
	    root: __dirname + '/../public/img/',
	    dotfiles: 'deny',
	    headers: {
	        'x-timestamp': Date.now(),
	        'x-sent': true
	    }
	};

	var fileName = req.params.name;
	res.sendFile(fileName, options, function (err) {
		if (err) {
	    	console.log(err);
	    	res.status(err.status).end();
	   	}
	    else {
	    	console.log('Sent:', fileName);
	    }
	});

});
*/

module.exports = router;
