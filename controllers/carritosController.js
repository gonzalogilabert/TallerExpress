const carritosService = require('../services/carritosService');

exports.obtenerTodos = (req, res) => {
  res.json(carritosService.listarConProductos());
};

exports.crear = (req, res) => {
  const nuevo = carritosService.crear(req.body);
  res.status(201).json(nuevo);
};
