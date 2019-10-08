const Tag = require('../models/tags');

module.exports = {
  all: async (req, res, next) => {
    try {
      const { query } = req.query;

      if (query === 'notes') {
        const tags = await Tag.find({}, '-assignments')
          .populate('notes')
        
        res.json({ tags });
      } else if (query === 'assignments') {
        const tags = await Tag.find({}, '-notes')
          .populate('assignments');
        
        res.json({ tags });
      } else {
        const tags = await Tag.find();
        res.json({ tags });
      }
    } catch (err) {
      next(err);
    }
  }
}