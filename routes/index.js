const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/', session: false }), (req, res) => {
  
  const token = auth.generateToken({
    id: req.user.id,
    isMentor: req.user.isMentor,
    isAdmin: req.user.isAdmin
  });
  
	return res.json({ token, profile: req.user })
});

module.exports = router;