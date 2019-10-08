const mongoose = require("mongoose");
const Batch = require('../models/batches');

const noteSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true
    },
    tag: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    batch: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

noteSchema.pre('save', async function(next) {
  const { batch, id } = this;
  await Batch.findOneAndUpdate({ number: batch }, {$push: { notes: id }});
});

noteSchema.pre('remove', async function(next) {
  const { batch, id } = this;
  await Batch.findOneAndUpdate({ number: batch }, {$pull: { notes: id }});
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
