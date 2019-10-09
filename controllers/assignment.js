const Assignment = require('../models/assignments');
const User = require('../models/users');
const Batch = require('../models/batches');

module.exports = {
  all: async (req, res, next) => {
    try {
      if (req.isMentor) {
        // return assignments authored by mentor
        const assignments = await Assignment.find({ author: req.userId });
        
        return res.json({ assignments });
      }
      
      // return assignment of a user
      const { batch } = await User.findById(req.userId);

      const { assignments } = await Assignment.find({ asignee: batch });

      res.json({ assignments });  
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      if (req.isMentor) {
        req.body.author = req.userId;
        req.body.tag = req.body.tag.toLowerCase();
        const assignment = await Assignment.create(req.body);

        await Batch.findOneAndUpdate({ number: assignment.asignee }, { $push: { assignments: assignment.id }})

        return res.json({ assignment });
      }
      res.json({ message: 'Not Authorized!'});
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { complete } = req.query; // complete can be true or false
      const { author } = await Assignment.findById(req.params.id);

      if (complete) {
        if (complete == 'true' && !req.isMentor) {
          await User.findByIdAndUpdate(req.userId, 
            { 
              $pull: { assignments: req.params.id }, 
              $push: { completed_assignments: req.params.id } 
            });
  
          await User.findByIdAndUpdate(author, { $inc: { pr_merged: 1} });
  
          return res.json({ msg: 'assignment merged!' });
        } else if (complete == 'false' && !req.isMentor) {
          return res.json({ msg: 'Try later!'});
        }
      }

      if (author == req.userId) {
        const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body);

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
      const { author } = await Assignment.findById(req.params.id);

      if (author == req.userId) {
        const assignment = await Assignment.findByIdAndDelete(req.params.id);

        await Batch.findOneAndUpdate({ number: assignment.asignee }, { $pull: { assignments: assignment.id }});

        await assignment.remove();
        res.json({ assignment });
      } else {
        res.json({ message: "Not Authorized" });
      }
    } catch (err) {
      next(err);
    }
  }
}