const express = require('express');
const router = express.Router();
const User = require('../../models/users');
/*
  GET - current user,
  POST - create user,
  PUT - update user
*/ 
router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const users = await User.find({});
      res.json({ users });
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const createdUser = await User.create(req.body);
      res.json({ user: createdUser });
    } catch (err) {
      next(err);
    }
  })
  .put();
/*
  GET - user by id,
  POST - create user (mentor),
  PUT - update user (mentor),
  DELETE - remove user (mentor)
*/
router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      
      user.validatePassword('hello', (err, isValidated) => {
        if (isValidated) {
          console.log('validated');
        }
      })
      res.json({ user });
    } catch (err) {
      next(err);
    }
  })
  .post()
  .put()
  .delete()

router
  .route('/login')
  .post()

module.exports = router;