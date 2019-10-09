const Blog = require("../models/blogs");
const User = require("../models/users");

// Defining methods blog controller
module.exports = {
  // Create new blog
  create: async (req, res, next) => {
    try {
      if(!req.isMentor) {
        req.body.author = req.userId;
        const blog = await Blog.create(req.body);
        
        return res.json({ success: true, blog });
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  },

  // Read all blogs
  all: async (req, res, next) => {
    try {
      const { username } = req.query;
      if (username) {
        const { blogs } = await User.find({ username }).populate("blogs");
        return res.json({ success: true, blogs });
      }
      const blogs = await Blog.find({});
      return res.json({ success: true, blogs });
    } catch (err) {
      next(err);
    }
  },

  // Update an existing article
  update: async (req, res, next) => {
    try {
      const { url, title, description } = req.body;
      if(!req.isMentor) {
        const {author} = await Blog.findOne({_id: req.params.id});
        if(author == req.userId) {
          const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { url, title, description },
            { new: true }
          );
          return res.json({ success: true, blog });
        } else {
          return res.json({msg: 'Not Authorized'});
        }
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  },

  // Delete an existing article
  delete: async (req, res, next) => {
    try {
      if(!req.isMentor) {
        const {author} = await Blog.findOne({_id: req.params.id});
        if(author == req.userId) {
          let blog = await Blog.findByIdAndDelete(req.params.id);
          blog = await blog.remove();
          return res.json({ success: true, blog });
        } else {
          return res.json({ msg: 'Not Authorized' });
        }
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  }
};
