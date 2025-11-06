const pedidosService = require('../services/pedidosService');

exports.obtenerTodos = (req, res) => {
  res.json(pedidosService.listarConProductos());
};

exports.crear = (req, res) => {
  // validaciones via middleware
  const nuevo = pedidosService.crear(req.body);
  res.status(201).json(nuevo);
};
