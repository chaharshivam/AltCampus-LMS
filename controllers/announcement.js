const Announcement = require('../models/announcements');

module.exports = {
  all: async (req, res, next) => {
    try {
      const announcements = await Announcement.find();

      res.json({ announcements });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      let announcement = req.body;
      announcement.author = req.userId;

      announcement = await Announcement.create(announcement);

      res.json({ announcement });
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const announcement = await Announcement.findById(req.params.id);

      if (announcement.author == req.userId) {
        await Announcement.findByIdAndDelete(req.params.id);
        return res.json({ announcement });
      } else {
        return res.json({ message: 'Not Authorized'});
      }
    } catch (err) {
      next(err);
    }
  }
}