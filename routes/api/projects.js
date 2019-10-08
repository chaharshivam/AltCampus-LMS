const express = require('express');
const router = express.Router();
const project = require('../../controllers/project');
const auth = require('../../middlewares/auth');

router
  .route('/')
  .get(project.all)
  .post(auth.verifyToken, project.create)

router
  .route('/:id')  
  .put(auth.verifyToken, project.update)
  .delete(auth.verifyToken, project.delete)

module.exports = router;