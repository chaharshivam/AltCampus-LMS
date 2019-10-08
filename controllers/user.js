const User = require('../models/users');
const Batch = require('../models/batches');
const auth = require('../middlewares/auth');

module.exports = {
  current: async (req, res, next) => {
    try {
      const user = await User.findById(req.userId, '-password');
      res.json({ user });
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.json({ message: "Username/password not found" });
      }

      if (await user.validatePassword(password)) {
        const token = auth.generateToken({
          id: user.id,
          isMentor: user.isMentor,
          isAdmin: user.isAdmin
        });

        return res.json({ token, profile: user });
      }
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const user = await User.create(req.body);

      res.json({ user });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      let user = await User.findById(req.userId);
      let batch = await Batch.findOne({ number: user.batch });

      if (req.body.batch && !user.batch && !batch && !req.isMentor) {
        await Batch.create({ number: req.body.batch, members: user.id });
      } else if (req.body.batch && !user.batch && batch && !req.isMentor) {
        await Batch.findByIdAndUpdate(batch.id, { $push: { members: req.userId } });
      }

      for (key in req.body) {
        user[key] = req.body[key];
      }

      user = await user.save();

      res.json({ user });
    } catch (err) {
      next(err);
    }
  },
  profile: async (req, res, next) => {
    try {
      const profile = await User.findById(req.params.id, '-password');

      res.json({ profile });
    } catch (err) {
      next(err);
    }
  },
  updateStudent: async (req, res, next) => {
    try {
      if (req.isMentor || req.isAdmin) {
        let student = await User.findById(req.params.id);
        
        if (student.batch && req.body.batch) {
          await Batch.findOneAndUpdate({ number: student.batch }, { $pull: { members: student.id }});
          await Batch.findOneAndUpdate({ number: req.body.batch }, { $push: { members: student.id }});
        }

        for (key in req.body) {
          student[key] = req.body[key];
        }

        student = await student.save();

        res.json({ student });
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  },
  deleteStudent: async (req, res, next) => {
    try {
      if (req.isMentor || req.isAdmin) {
        const student = await User.findByIdAndDelete(req.params.id);
        await Batch.findOneAndUpdate({ number: student.batch }, { $pull: { members: student.id }});

        res.json({ student });
      } else {
        return res.json({ msg: 'Not Authorized' });
      }
    } catch (err) {
      next(err);
    }
  }
};