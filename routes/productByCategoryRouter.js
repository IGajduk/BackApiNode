let router = require('express').Router();
let ProductsByCategoryController = require('../controllers/productsByCategoryController');

router.get('/:id', ProductsByCategoryController.getProductsByCategory);

module.exports = router;