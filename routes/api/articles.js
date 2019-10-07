const express = require('express');
const articleController = require('../../controllers/article');
const router = express.Router();

// Student route. Read articles.
router
    .route('/')
    .get(articleController.all);

// Mentor route. Create new article
router
    .route('/')
    .post(articleController.create);

// Delete article
router
    .route('/:id')
    .delete(articleController.delete);


module.exports = router;