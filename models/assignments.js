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
    /*May change to Number*/
    type: Date,
    required: true
  },
  tag: {
    type: String,
    lowercase: true,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  asignee: Number
}, { timestamps: true });

assignmentSchema.pre('save', async function(next) {
  const Tag = await require('./tags');

  const tag = await Tag.findOneAndUpdate(
      {name: this.tag },
      { $push: { assignments: this.id } },
      { upsert: true }
    );

  next();
});

assignmentSchema.pre('remove', async function(next) {
  const Tag = await require('./tags');

  const tag = await Tag.findOneAndUpdate(
    {name: this.tag },
    { $pull: { assignments: this.id } }
  );
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;