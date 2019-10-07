const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  repo_url: {
    type: String,
    required: true
  },
  live_url: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  technologies: [
    {
      type: String
    }
  ]
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;