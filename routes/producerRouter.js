let router = require('express').Router();
let ProducerController = require('../controllers/producerController');
const permission = require('../middleware/authorization/index');
let Roles = require('../config/roles');

router.get('/', ProducerController.getAll);
router.get('/:id', ProducerController.getById);
router.post('/', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE),  ProducerController.create);
router.put('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), ProducerController.update);
router.delete('/:id', permission.roles(Roles.GLOBAL_ROLES.ADMIN_ROLE), ProducerController.delete);

module.exports = router;