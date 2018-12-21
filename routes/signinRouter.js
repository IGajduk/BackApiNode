let router = require('express').Router();
let SigninController = require('../controllers/signinController');


router.get('/', SigninController.signIn);

module.exports = router;