const express = require('express');
const blogController = require('../../controllers/blogs');
const auth = require('../../middlewares/auth');
const router = express.Router();

/*
    GET - Read all blogs: Student + Mentor
    POST - Create new blog: Student
*/
router
    .route('/')
    .get(auth.verifyToken, blogController.all)
    .post(auth.verifyToken, blogController.create);

/*
    PUT - Update blog: Student
    DELETE - Delete a blog: Student
*/
router
    .route('/:id')
    .put(auth.verifyToken, blogController.update)
    .delete(auth.verifyToken, blogController.delete);

module.exports = router;