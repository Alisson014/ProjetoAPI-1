const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');


router.post('/', clientsController.create);
router.get('/', clientsController.findAll);
router.get('/:id', clientsController.findById);
router.put('/:id', clientsController.update);
router.delete('/:id', clientsController.delete);

module.exports = router;