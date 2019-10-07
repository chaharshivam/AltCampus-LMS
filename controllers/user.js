const User = require('../models/users');
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
      
      for(key in req.body) {
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
      const student = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

      res.json({ student });
    } catch (err) {
      next(err);
    }
  },
  deleteStudent: async (req, res, next) => {
    try {
      const student = await User.findByIdAndDelete(req.params.id);
      
      res.json({ student });
    } catch (err) {
      next(err);
    }
  }
};