const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
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
        ref: 'User',
        required: false,
    },
    url: {
        type: String,
        required: true
    },
    technologies: [{
        type: String 
    }]
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;