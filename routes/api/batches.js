const express = require("express");
const batchController = require("../../controllers/batches");
const auth = require('../../middlewares/auth');
const router = express.Router();

/*
    GET - Read batches: Student + Mentor
    POST - Create new batch: Mentor
*/
router
    .route("/")
    .get(auth.verifyToken, batchController.all)
    .post(auth.verifyToken, batchController.create);

/*
    DELETE - Delete a batch: Mentor
    PUT - Update a batch: Mentor
*/
router
    .route("/:id")
    .put(auth.verifyToken, batchController.update)
    .delete(auth.verifyToken, batchController.delete);

module.exports = router;
