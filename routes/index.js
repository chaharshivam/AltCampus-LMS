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
  
  const token = auth.generateToken({ userId: req.user.id });

	res.json({ authToken: token });
});

module.exports = router;