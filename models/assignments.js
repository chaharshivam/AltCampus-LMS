const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  repo_url: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  tags: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true });

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;