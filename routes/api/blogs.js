const express = require('express');
const blogController = require('../../controllers/blogs');
const router = express.Router();

router.route('/').get(blogController.all);

router.route('/').post(blogController.create);

router.route('/:id').put(blogController.update);

router.route('/:id').delete(blogController.delete);


module.exports = router;