let router = require('express').Router();
let OrderController = require('../controllers/orderController');
const permission = require('../middleware/authorization/index');
let Roles = require('../config/roles');

router.get('/', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), OrderController.getAll);
router.get('/:id', OrderController.getById);
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.delete('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), OrderController.delete);

module.exports = router;