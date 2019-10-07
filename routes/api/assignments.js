const express = require('express');
const router = express.Router();
const assignment = require('../../controllers/assignment');
const auth = require('../../middlewares/auth');

router
  .route('/')
  .get(auth.verifyToken, assignment.all)
  .post(auth.verifyToken, assignment.create);
  
router
  .route('/:id')  
  .put(auth.verifyToken, assignment.update)
  .delete(auth.verifyToken, assignment.delete);
  
module.exports = router;