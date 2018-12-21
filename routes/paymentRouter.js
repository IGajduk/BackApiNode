let router = require('express').Router();
let PaymentController = require('../controllers/paymentController');
const permission = require('../middleware/authorization/index');
let Roles = require('../config/roles');

router.get('/', PaymentController.getAll);
router.get('/:id', PaymentController.getById);
router.post('/', PaymentController.create);
router.put('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), PaymentController.update);
router.delete('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), PaymentController.delete);

module.exports = router;