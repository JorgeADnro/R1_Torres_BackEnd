const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')

router.get('/',productoController.ordenarGenero);
router.get('/f',productoController.ordenarGeneroF)