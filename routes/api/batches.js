var express = require("express");
var batchController = require("../../controllers/batches");
var router = express.Router();

// Create a new batch
router.route("/").post(batchController.create);

// Delete an existing batch
router.route("/:id").delete(batchController.delete);

// Read all batch
router.route("/").get(batchController.all);
module.exports = router;
