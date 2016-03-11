var express = require('express');
var router = express.Router();



router.get('/linkedin', function(req, res, next){
	res.render('index', {title: 'linkedin'})
})


router.get('/linkedin/callback', function(req, res, next){
	res.render('index', {title: 'callback'})
})

router.get('/logout', function(req, res, next){
	res.render('index', {title: 'callback'})
})



module.exports = router;