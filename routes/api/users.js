const express = require('express');
const router = express.Router();
const user = require('../../controllers/user');
const auth = require('../../middlewares/auth');
/*
  GET - current user,
  POST - create user,
  PUT - update user
*/ 
router
  .route('/')
  .get(auth.verifyToken, user.current)
  .post(user.create)
  .put(auth.verifyToken, user.update);
/*
  GET - student by id,
  PUT - update student (mentor),
  DELETE - remove user (mentor)
*/
router
  .route('/:id')
  .get(user.profile)
  .put(auth.verifyToken, user.updateStudent)
  .delete(auth.verifyToken, user.deleteStudent)

router
  .route('/login')
  .post(user.login)

module.exports = router;