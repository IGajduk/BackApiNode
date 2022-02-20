let ControllerError = require('../errors/ControllerError');
let Category = require('../models/Category');
let path = require('path');
let fs = require("fs");

let controller = {};

controller.getAll = async (req, res, next) => {
    try {
        res.status(200).json({result : await Category.find({}), user: req.user});
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.getById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let category = await Category.findById(id);
        res.status(200).json({result: category, user: req.user});
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.create = async (req, res, next) => {
    console.log(req.file);
    try {
        let category = await Category.create({
            title: req.body.title,
            imageSrc: req.file ? req.file.filename : ''
        });

        res.status(201).json(category);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.update = async (req, res, next) => {
    try {
        let cat = await Category.findById(req.params.id);
        if (cat.imageSrc) {
            fs.unlink(path.join(__dirname, '..', 'public', 'upload', 'categoryImgs', `${cat.imageSrc}`), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(cat.imageSrc, "Изображение удалёно");
                }
            });
        }
        let category = await Category.findByIdAndUpdate(
                            req.params.id,
                            {
                                title: req.body.title,
                                imageSrc: req.file ? req.file.filename : ''
                            },
                            {new: true}
                       );
        res.status(200).json(category);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.delete = async (req, res, next) => {
    try {
        let category = await Category.findByIdAndRemove(req.params.id);
        fs.unlink(path.join(__dirname, '..', 'public','upload', 'categoryImgs',`${category.imageSrc}`), function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Файл удалён");
            }
        });
        res.status(200).json(category);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

module.exports = controller;