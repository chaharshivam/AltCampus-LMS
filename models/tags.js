const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  assignments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: true
  }],
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
    required: true
  }]
}, { timestamps: true });

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;