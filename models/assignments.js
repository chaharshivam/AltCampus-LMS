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
  const User = await require('./users');

  await Tag.findOneAndUpdate(
      {name: this.tag },
      { $push: { assignments: this.id } },
      { upsert: true }
    );
  
  await User.updateMany({ batch: this.asignee }, { $push: { assignments: this.id }});

  next();
});

assignmentSchema.pre('remove', async function(next) {
  const Tag = await require('./tags');
  const User = await require('./users');

  await Tag.findOneAndUpdate(
    {name: this.tag },
    { $pull: { assignments: this.id } }
  );

  await User.updateMany({ batch: this.asignee }, { $pull: { assignments: this.id }});
  await User.updateMany({ batch: this.asignee }, { $pull: { completed_assignments: this.id }});
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;