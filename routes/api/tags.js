const express = require('express');
const router = express.Router();
const tag = require('../../controllers/tag');
const auth = require('../../middlewares/auth');

router
  .route('/')
  .get(auth.verifyToken, tag.all)

module.exports = router;