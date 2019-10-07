const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const announcement = require('../../controllers/announcement');

router
  .route('/')
  .get(auth.verifyToken, announcement.all)
  .post(auth.verifyToken, announcement.create)

router
  .route('/:id')
  .delete(auth.verifyToken, announcement.delete);

module.exports = router;