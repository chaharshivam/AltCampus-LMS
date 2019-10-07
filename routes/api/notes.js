var express = require('express');
var notesController = require('../../controllers/notes');
var auth = require('../../middlewares/auth');
var router = express.Router();

/*
    GET - Read all notes: Student + Mentor
    POST - Create new notes: Mentor
    PUT - Update a notes: Mentor
*/
router
    .route('/')
    .get(auth.verifyToken, notesController.all)
    .post(auth.verifyToken, notesController.create)
    .put(auth.verifyToken, notesController.update);


/*
    GET - Read a single note: Student + Mentor
    DELETE - Delete a note: Metnor
*/
router
    .route('/:id')
    .get(auth.verifyToken, notesController.singleNote)
    .delete(auth.verifyToken, notesController.delete);

module.exports = router;