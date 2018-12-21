let router = require('express').Router();
let ProductController = require('../controllers/productController');
const permission = require('../middleware/authorization/index');
let Roles = require('../config/roles');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), ProductController.create);
router.put('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), ProductController.update);
router.delete('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), ProductController.delete);

module.exports = router;