const Assignment = require('../models/assignments');
const User = require('../models/users');

module.exports = {
  all: async (req, res, next) => {
    try {
      // return assignment of a user
      const assignments = await User.findById(req.userId)
        .populate('assignments');

      res.json({ assignments });  
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      req.body.author = req.userId;
      const assignment = Assignment.create(req.body);

      res.json({ assignment });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      if (req.body.author == req.userId) {
        const assignment = Assignment.findByIdAndUpdate(req.params.id, req.body);

        res.json({ assignment });
      } else {
        res.json({ message: "Not Authorized" });
      }
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      if (req.body.author == req.userId) {
        const assignment = Assignment.findByIdAndDelete(req.params.id);

        res.json({ assignment });
      } else {
        res.json({ message: "Not Authorized" });
      }
    } catch (err) {
      next(err);
    }
  }
}