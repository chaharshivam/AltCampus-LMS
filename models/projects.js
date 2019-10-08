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
  technologies: [String]
}, { timestamps: true });

projectSchema.pre('save', async function(next) {
  const User = await require('../models/users');
  const { author, id } = this;

  await User.findByIdAndUpdate(author, { $push: { projects: id }});
  return next();
})

projectSchema.pre('remove', async function(next) {
  const User = await require('../models/users');
  const { author, id } = this;

  await User.findByIdAndUpdate(author, { $pull: { projects: id }});
  return next();
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;