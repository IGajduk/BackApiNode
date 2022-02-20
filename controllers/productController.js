let ControllerError = require('../errors/ControllerError');
let Product = require('../models/Product');
const base64Img = require('base64-img');
let path = require('path');
let controller = {};

controller.getAll = async (req, res, next) => {
        try {
            res.status(200).json(await Product.find({}));
        }catch (e) {
            next(new ControllerError(e.message, 400));
        }
};
controller.getById = async (req, res, next) => {
    try{
        let id = req.params.id;
        let product = await Product.findById(id);
        res.status(200).json(product);
    }catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.create = async (req, res, next) => {
    try{


        const arrColors = Object.keys(req.body.colors);
        for (let i = 0; i < arrColors.length; i++) {
            for(let j = 0; j < req.body.colors[`${arrColors[i]}`].imagesBase64.length; j++) {
                base64Img.img(
                    req.body.colors[`${arrColors[i]}`].imagesBase64[j],
                    path.join(__dirname, '../public','upload','productsImages'),
                    `img${Math.ceil(Math.random()*100)}`,
                    function(err, filepath) {
                    if (err) {
                        console.log(err);
                    }
                        console.log(filepath);
                    });
            }
        }

        // let product = await Product.create(req.body);
        // res.status(201).json(product);
    }catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.update = async (req, res, next) => {
    try{
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(product);
    }catch (e) {
        next(new ControllerError(e.message, 400));
    }
};
controller.delete = async (req, res, next) => {
    try{
        let product = await Product.findByIdAndRemove(req.params.id);
        res.status(200).json(product);
    }catch (e) {
        next(new ControllerError(e.message, 400));
    }
};

module.exports = controller;