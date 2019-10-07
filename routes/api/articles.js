const express = require("express");
const articleController = require("../../controllers/article");
const auth = require('../../middlewares/auth');
const router = express.Router();

/*
    GET - Read all articles: Student + Mentor
    POST - Create newArticle: Mentor
*/
router
    .route("/")
    .get(auth.verifyToken, articleController.all)
    .post(auth.verifyToken, articleController.create);  

// DELETE - Delete an article: Mentor
router
    .route("/:id")
    .delete(auth.verifyToken, articleController.delete);

module.exports = router;
