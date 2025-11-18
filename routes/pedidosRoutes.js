const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// 1. GET /api/pedidos
// Obtiene la lista de todos los pedidos (o pedidos del usuario autenticado)
router.get('/', pedidosController.obtenerTodos);

// 2. GET /api/pedidos/:id
// Obtiene un pedido específico por su ID.
router.get('/:id', pedidosController.obtenerPorId);

// 3. POST /api/pedidos
// Crea un nuevo pedido.
router.post('/', pedidosController.crear);

// 4. PUT /api/pedidos/:id
// Actualiza el estado de un pedido (ej. 'pendiente' a 'enviado').
router.put('/:id', pedidosController.actualizar);

// 5. DELETE /api/pedidos/:id
// Cancela o elimina un pedido.
router.delete('/:id', pedidosController.eliminar);

module.exports = router;