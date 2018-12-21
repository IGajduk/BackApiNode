let router = require('express').Router();
let CategoryController = require('../controllers/categoryController');
const permission = require('../middleware/authorization/index');
let Roles = require('../config/roles');

router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById);
router.post('/', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), CategoryController.create);
router.put('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), CategoryController.update);
router.delete('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), CategoryController.delete);

module.exports = router;