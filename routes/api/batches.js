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

// DELETE - Delete a batch: Mentor
router
    .route("/:id")
    .delete(auth.verifyToken, batchController.delete);

module.exports = router;
