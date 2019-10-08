const Batch = require("../models/batches");

// Defining methods for batch controller
module.exports = {
  /* Mentor Routes */
  create: async (req, res, next) => {
    try {
      if(req.isMentor) {
        const batch = await Batch.create(req.body);
        return res.json({ success: true, batch });
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      if(req.isMentor) {
        const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json({success: true, batch});
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch(err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      if(req.isMentor) {
        const batch = await Batch.findByIdAndDelete(req.params.id);
        return res.json({ success: true, batch });
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  },

  /* Student Routes */

  all: async (req, res, next) => {
    try {
        const batches = await Batch.find({});
        return res.json({ success: true, batches });
    } catch (err) {
        next(err);
    }
  }
};
