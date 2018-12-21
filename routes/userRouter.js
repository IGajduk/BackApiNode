let router = require('express').Router();
let UserController = require('../controllers/userController');
const permission = require('../middleware/authorization/index');
let Roles = require('../config/roles');

router.get('/', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', UserController.createUser);
router.put('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), UserController.update);
router.delete('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), UserController.delete);

module.exports = router;