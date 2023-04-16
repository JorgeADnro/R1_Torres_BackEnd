
// Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);
router.get('/genero/:genero', productoController.obtenerProductosPorGenero);
router.get('/areaInt/:areaInt', productoController.obtenerProductosPorArea);
router.get('/areaInt/:areaInt/genero/:genero', productoController.obtenerProductosPorAreaYGenero);

module.exports = router;