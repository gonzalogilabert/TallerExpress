const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// 1. GET /api/clientes
// Obtiene la lista de todos los clientes
router.get('/', clientesController.obtenerTodos);

// 2. GET /api/clientes/:id
// Obtiene un cliente específico por su ID
router.get('/:id', clientesController.obtenerPorId);

// 3. POST /api/clientes
// Crea un nuevo cliente
router.post('/', clientesController.crear);

// 4. PUT /api/clientes/:id
// Actualiza un cliente existente por su ID
router.put('/:id', clientesController.actualizar);

// 5. DELETE /api/clientes/:id
// Elimina un cliente por su ID
router.delete('/:id', clientesController.eliminar);

module.exports = router;