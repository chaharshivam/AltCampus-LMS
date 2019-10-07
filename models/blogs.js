const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    technologies: {
        type: String 
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;