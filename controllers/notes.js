const showdown = require('showdown');
const Note = require("../models/notes");

const convertor = new showdown.Converter({ noHeaderId: true });

// Defining methods for notes controller.
module.exports = {
  // Create notes
  create: async (req, res, next) => {
    try {
      if(req.isMentor) {
        req.body.author = req.userId;
        const note = await Note.create(req.body);
        return res.json({ success: true, note });
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
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
      const note = await Note.findByIdAndRemove(req.params.id);
      note.content = await convertor.makeHtml(note.content);
      
      return res.json({ success: true, note });
    } catch (err) {
      next(err);
    }
  },

  // Update note
  update: async (req, res, next) => {
    try {
      if(req.isMentor) {
        const nots = await Note.findOne({ _id: req.params.id });
        if(nots.author == req.userId) {
          const note = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
        } else {
          return res.json({ msg: 'Not Authorized' });
        }
        return res.json({ success: true, note });
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  },

  // Delete note
  delete: async(req, res, next) => {
      try {
        if(req.isMentor) {
          const nots = await Note.findOne({ _id: req.params.id });
          if(nots.author == req.userId) {
            let note = await Note.findByIdAndDelete(req.params.id);
            note = await note.remove();
            return res.json({ success: true, note });
          } else {
            return res.json({ msg: 'Not Authorized' });
          }
        } else {
          return res.json({ msg: 'Not Authorized' });
        }
      } catch(err) {
        next(err);
      }
  }

};