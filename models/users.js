const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  avatar_url: {
    type: String
  },
  cover_url: {
    type: String
  },
  bio: {
    type: String
  },
  twitter: {
    type: String
  },
  github: {
    type: String
  },
  linkedIn: {
    type: String
  },
  website: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: new RegExp('@.*[.]')
  },
  about: {
    type: String
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }],
  isMentor: {
    type: Boolean,
    default: false,
    required: true
  },
  batch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Batch'
  },
  password: {
    type: String,
    default: ''
  },
  assignments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment'
  }],
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  expertise: [{
    type: String
  }],
  pr_merged: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;