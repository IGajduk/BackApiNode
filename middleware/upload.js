const multer = require('multer');
const moment = require('moment');
let path = require('path');
let fs = require("fs");

const storage = multer.diskStorage({

    destination(req, file, cb) {
        console.log(req.body);

        cb(null, path.join(__dirname, '../public','upload', 'categoryImgs'))
    },
    filename(req, file, cb){
        const date = moment().format('DDMMYYYY-kkmmss_SSS');
        cb(null, `${date}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimeType === 'image/png' || file.mimeType === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const limits = {
    fileSize: 1024 * 1024 * 5
}

module.exports = multer({storage: storage, limits: limits});