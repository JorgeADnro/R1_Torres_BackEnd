
// Rutas para producto
const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

// api/productos
router.post('/', eventoController.crearEvento);
router.get('/', eventoController.obtenerEventos);
router.get('/:id', eventoController.obtenerEvento);
router.delete('/:id', eventoController.eliminarEvento);

module.exports = router;