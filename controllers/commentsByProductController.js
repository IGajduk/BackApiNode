let ControllerError = require('../errors/ControllerError');
let Comment = require('../models/Comment');
let controller = {};

controller.getCommentsByProduct = async (req, res, next) => {
    try {
        let id = req.params.id;
        res.status(200).json(await Comment.find({'product': id}));
    }catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

module.exports = controller;

