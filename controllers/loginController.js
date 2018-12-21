let ControllerError = require('../errors/ControllerError');
let controller = {};

controller.logining = (req, res, next) => {
    try {
        console.log(req.user);
        console.log(req.message);
        res.status(200).json({principal: req.user});

    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
}

module.exports = controller;