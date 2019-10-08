const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true
    },
    tag: {
      type: String,
      lowercase: true,
      required: true
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
  const Batch = await require('./batches');
  const Tag = await require('./tags');
  const { batch, id, tag } = this;
  await Batch.findOneAndUpdate({ number: batch }, {$push: { notes: id }});
  await Tag.findOneAndUpdate({ name: tag }, {$push: { notes: id }}, { upsert: true });
});

noteSchema.pre('remove', async function(next) {
  const Batch = await require('./batches');
  const Tag = await require('./tags');
  const { batch, id, tag } = this;
  await Batch.findOneAndUpdate({ number: batch }, {$pull: { notes: id }});
  await Tag.findOneAndUpdate({ name: tag }, {$pull: { notes: id }});
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
