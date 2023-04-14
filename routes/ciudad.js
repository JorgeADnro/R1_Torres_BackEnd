// Rutas para producto
const express = require('express');
const router = express.Router();
const ciudadController = require('../controllers/ciudadController');

router.get('/', ciudadController.obtenerCiudades);
router.get('/:id', ciudadController.obtenerCiudad);


module.exports = router;