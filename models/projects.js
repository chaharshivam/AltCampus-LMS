const mongoose = require('mongoose');
const User = require('../models/users');

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
  technologies: [String]
}, { timestamps: true });

projectSchema.pre('save', async function(next) {
  const { author, id } = this;

  await User.findByIdAndUpdate(author, { $push: { projects: id }});
})

projectSchema.pre('remove', async function(next) {
  const { author, id } = this;

  await User.findByIdAndUpdate(author, { $pull: { projects: id }});
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;