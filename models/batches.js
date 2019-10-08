const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }],
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment'
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
}, { timestamps: true });

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;