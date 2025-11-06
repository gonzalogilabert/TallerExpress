const express = require('express');
const router = express.Router();
const validateBody = require('../middleware/validateBody');

router.get('/', (req, res) => {
  res.json({ mensaje: 'Listado de productos' });
});

router.post('/', validateBody(['nombre', 'precio', 'categoriaId']), (req, res) => {
  res.status(201).json({ mensaje: 'Producto creado correctamente', producto: req.body });
});

module.exports = router;
