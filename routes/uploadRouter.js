let router = require('express').Router();
let UploadController = require('../controllers/uploadController');


router.post('/', UploadController.uploadImage);
router.post('/:id', UploadController.productId);
router.delete('/:id', UploadController.deleteById);
router.put('/:id', UploadController.updateImage);

module.exports = router;