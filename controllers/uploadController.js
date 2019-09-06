let ControllerError = require('../errors/ControllerError');
let Product = require('../models/Product');
let Image = require('../models/Image');
let multer = require('multer');
let path = require('path');
let fs = require("fs");


let controller = {};
let productId = {};

function modifingName(name) {
    let originNameWithoutSpaces = name.split(' ').join('-');
    let newName = originNameWithoutSpaces.split('.');
    return newName;
}

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public','upload'));
    },
    filename: function (req, file, cb) {
        let titleOfImage = modifingName(file.originalname);
        console.log(titleOfImage, 'New name trying2');
        if (titleOfImage.length === 2) {
            cb(null, titleOfImage[0] + '-' + Date.now() + '.' + titleOfImage[1]);
            return console.log('1111');
        } else if (titleOfImage.length <= 3) {
            cb(null, titleOfImage[0] + titleOfImage[1] + '-' + Date.now() + '.' + titleOfImage[titleOfImage.length - 1]);
            return console.log('2222');
        } else {
            return cb(null, file.originalname + '-' + Date.now() + '.jpg');
        }
    }
});
controller.productId = async (req, res, next) => {
    try {
        if(req.body.id.length === 24){
            console.log(1);
            productId = req.body;
            let product = await Product.findById(productId.id);
            let images = await Image.find({'product': productId.id}).sort({'position': 1});
            res.status(201).json(images);
            return productId;
        } else {
            res.status(200).json({message: 'check product id'});
            return productId = null;
        }
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
}


controller.uploadImage = async (req, res) => {
    var upload = multer({storage: storage}).array(productId.id);
    let createdImgsArr = [];

           upload(req, res, async function (err) {
                if (err) {
                    // An unknown error occurred when uploading.
                }


                for (let file of req.files) {
                    let newImg = {};
                    let index = req.files.indexOf(file);
                    newImg.product = productId.id;
                    newImg.position = index;
                    newImg.title = file.filename;
                    newImg.urlOfImg = `/upload/${file.filename}`;
                    console.log('newImg here', newImg, 'newImg here');
                    createdImgsArr.push(newImg);
                    await Image.create(newImg);
                }
                console.log(createdImgsArr, 'arr with created images');
                console.log(req.files);
               let images = await Image.find({'product': productId.id}).sort({'position': 1});
               console.log(images);
               res.status('200').json(images);
            });
};



controller.deleteById = async (req, res, next) => {
    try{
       let image = await Image.findByIdAndRemove(req.params.id);
        fs.unlink(path.join(__dirname, '..', 'public','upload',`${image.title}`), function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Файл удалён");
            }
        });
        let images = await Image.find({'product': productId.id}).sort({'position': 1});
        res.status('200').json(images);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
}
controller.updateImage = async (req, res, next) => {
    try{
        let image = await Image.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(image);
    } catch (e) {
        next(new ControllerError(e.message, 400));
    }
}



module.exports = controller;