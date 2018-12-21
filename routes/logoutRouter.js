let router = require('express').Router();
let LogoutController = require('../controllers/logoutController');


router.get('/', LogoutController.logOuting);

module.exports = router;