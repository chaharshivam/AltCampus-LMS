const Note = require("../models/notes");

// Defining methods for notes controller.
module.exports = {
  // Create notes
  create: async (req, res, next) => {
    try {
      const note = await Note.create(req.body);
      return res.json({ success: true, note });
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
      return res.json({ success: true, note });
    } catch (err) {
      next(err);
    }
  },

  // Update note
  update: async (req, res, next) => {
    const {} = req.body;
    try {
      const note = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res.json({ success: true, note });
    } catch (err) {
      next(err);
    }
  },

  // Delete note
  delete: async(req, res, next) => {
      try {
        const note = await Note.findByIdAndDelete(req.params.id);
        return res.json({ success: true, note });
      } catch(err) {
        next(err);
      }
  }

};