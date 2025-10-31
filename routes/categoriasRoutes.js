const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');
router.get('/', categoriasController.obtenerTodos);
router.get('/:id', categoriasController.obtenerPorId);
router.post('/', categoriasController.crear);
router.put('/:id', categoriasController.actualizar);
router.delete('/:id', categoriasController.eliminar);
module.exports = router;