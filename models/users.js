const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;