const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// 1. GET /api/carritos
// Obtiene el contenido completo del carrito (o todos los carritos, según tu controlador)
router.get('/', carritoController.obtenerTodos);

// 2. POST /api/carritos
// Crea un nuevo carrito o añade un producto a un carrito existente
router.post('/', carritoController.crear);

// 3. PUT /api/carritos/:id
// Actualiza un item en el carrito (ej. cambiar la cantidad de un producto)
router.put('/:id', carritoController.actualizar);

// 4. DELETE /api/carritos/:id
// Elimina un producto específico del carrito (o elimina el carrito por completo)
router.delete('/:id', carritoController.eliminar);

module.exports = router;