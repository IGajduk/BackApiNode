let router = require('express').Router();
let CommentsByProductController = require('../controllers/commentsByProductController');

router.get('/:id', CommentsByProductController.getCommentsByProduct);

module.exports = router;