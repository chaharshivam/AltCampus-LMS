const showdown = require('showdown');
const Note = require("../models/notes");

const convertor = new showdown.Converter({ noHeaderId: true });

// Defining methods for notes controller.
module.exports = {
  // Create notes
  create: async (req, res, next) => {
    try {
      const newNote = await Note.create(req.body);
      return res.json({ success: true, newNote });
    } catch (err) {
      next(err);
    }
  },

  // Read all notes
  all: async (req, res, next) => {
    try {
      const notes = await Note.find({});
      return res.json({ success: true, notes });
    } catch (err) {
      next(err);
    }
  },

  // Read single note
  singleNote: async (req, res, next) => {
    try {
      const note = await Note.findOne({ _id: req.params.id });
      note.description = await convertor.makeHtml(article.description);
      
      return res.json({ success: true, note });
    } catch (err) {
      next(err);
    }
  },

  // Update note
  update: async (req, res, next) => {
    const {} = req.body;
    try {
      const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    } catch (err) {
      next(err);
    }
  },

  // Delete note
  delete: async(req, res, next) => {
      try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        return res.json({ success: true, deletedNote });
      } catch(err) {
        next(err);
      }
  }

};