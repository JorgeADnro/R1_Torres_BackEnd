// Rutas para producto
const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargoController');

router.get('/', cargoController.obtenerCargos);
router.get('/:id', cargoController.obtenerCargo);


module.exports = router;