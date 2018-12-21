let ControllerError = require('../errors/ControllerError');
let controller = {};

controller.logOuting = (req, res, next) => {
    try {
        req.logout();
        res.status(200).json({principal: null});
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
}

module.exports = controller;