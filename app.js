require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
// Routers
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const app = express();
// Connect to Mongo DB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Strategy
// require('./middlewares/passport');
// Routes
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Error Handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({ message: "Error Occured", err });
});

module.exports = app;