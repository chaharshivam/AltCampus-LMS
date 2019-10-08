const mongoose = require('mongoose');
const User = require('./users');

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
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    technologies: [{
        type: String 
    }]
}, { timestamps: true });

blogSchema.pre('save', async function(next) {
    const User = await require('../models/users');
    const { author, id } = this;
    
    await User.findByIdAndUpdate(author, { $push: { blogs: id }});

    return next();
});

blogSchema.pre('remove', async function (next) {
    const User = await require('../models/users');
    const { author, id } = this;
    await User.findByIdAndUpdate(author, { $pull: { blogs: id }});
    
    return next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;