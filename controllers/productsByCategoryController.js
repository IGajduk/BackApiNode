let ControllerError = require('../errors/ControllerError');
let Product = require('../models/Product');

let controller = {};

controller.getProductsByCategory = async (req, res, next) => {
    try {
        let id = req.params.id;
        res.status(200).json(await Product.find({'category': id}));
    }catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

module.exports = controller;