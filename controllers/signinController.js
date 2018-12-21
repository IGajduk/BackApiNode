let ControllerError = require('../errors/ControllerError');
let controller = {};

controller.signIn = (req, res, next) => {
    try {
        res.status(200).json({principal: req.user});

    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
}

module.exports = controller;