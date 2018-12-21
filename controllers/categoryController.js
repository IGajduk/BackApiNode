let ControllerError = require('../errors/ControllerError');
let Category = require('../models/Category');

let controller = {};

controller.getAll = async (req, res, next) => {
    try {
        console.log('cat', req.user, 'cat');
        res.status(200).json({aa : await Category.find({}), vv: req.user});
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.getById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let category = await Category.findById(id);
        res.status(200).json(category);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.create = async (req, res, next) => {
    try {
        let category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.update = async (req, res, next) => {
    try {
        let category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(category);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.delete = async (req, res, next) => {
    try {
        let category = await Category.findByIdAndRemove(req.params.id);
        res.status(200).json(category);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

module.exports = controller;