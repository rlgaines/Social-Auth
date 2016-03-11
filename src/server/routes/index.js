var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if(!req.user){
		res.render('index', {title: 'Please Log In'})
	} else {
		var name = req.user.displayName || '';
		res.render('index', { title: 'Hello ' + name })	
	}
});
module.exports = router;
