var express = require('express');
var router = express.Router();
var passport = require('passport');
	

router.get('/', function(req, res, next) {
var name = req.user.displayName || '';
res.render('index', { title: 'Hello ' + name })});

// router.get('/linkedin', function(req, res, next){
// 	res.render('index', {title: 'linkedin'})
// })

router.get('/linkedin', passport.authenticate('linkedin'));


router.get('/linkedin/callback', passport.authenticate('linkedin', {
  failureRedirect: '/'
}), function (req, res, next) {
  // console.log('user:', req.user);
  res.redirect('/');
});

router.get('/logout', function(req, res, next){
	req.logout();
	res.redirect('/');
})



module.exports = router;