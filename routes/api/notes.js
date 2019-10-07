var express = require('express');
var notesController = require('../../controllers/notes');
var router = express.Router();

// Read all notes
router.route('/').get(notesController.all);

// Read single notes
router.route('/:id').get(notesController.singleNote);

// Create note
router.route('/').post(notesController.create);

// Update note
router.route('/').post(notesController.update);

// Delete note
router.route('/:id').delete(notesController.delete);

module.exports = router;