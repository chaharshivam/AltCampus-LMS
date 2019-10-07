const express = require('express');
const router = express.Router();

// Routers
const articleRouter = require('./articles');
const assignmentRouter = require('./assignments');
const announcementRouter = require('./announcements');
const batchRouter = require('./batches');
const blogRouter = require('./blogs');
const notesRouter = require('./notes');
const projectRouter = require('./projects');
const tagRouter = require('./tags');
const userRouter = require('./users');
// Routes
router.use('/articles', articleRouter);
router.use('/assignments', assignmentRouter);
router.use('/announcements', announcementRouter);
router.use('/batches', batchRouter);
router.use('/blogs', blogRouter);
router.use('/notes', notesRouter);
router.use('/projects', projectRouter);
router.use('/tags', tagRouter);
router.use('/users', userRouter);

module.exports = router;