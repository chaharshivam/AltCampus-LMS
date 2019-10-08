const Project = require('../models/projects');
const User = require('../models/users');

module.exports = {
  all: async (req, res, next) => {
    try {
      const { username } = req.query;
    
      if (username) {
        const user = await user.findOne({ username });
        const projects = await Project.find({ author: user.id });

        return res.json({ projects });
      } else {
        const projects = await Project.find();
        return res.json({ projects });
      }
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      if (!req.isMentor) {
        req.body.author = req.userId;
        const project = await Project.create(req.body);

        res.json({ project });
      } else {
        res.json({ msg: 'Not Authorized!' });
      }
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      let project = await Project.findById(req.params.id);
      
      if (!req.isMentor && req.userId == project.author) {
        project = await Project.findByIdAndUpdate(req.params.id, req.body);

        res.json({ project });
      } else {
        res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      let project = await Project.findById(req.params.id);

      if (!req.isMentor && req.userId == project.author) {
        project = await Project.findByIdAndDelete(req.params.id);

        project = await project.remove();

        res.json({ project });
      } else {
        res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  }
}