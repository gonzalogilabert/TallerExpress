// validateBody(requiredFieldsArray)
module.exports = (requiredFields = []) => {
  return (req, res, next) => {
    const missing = requiredFields.filter(f => {
      // soporta campos anidados 'clienteId' o 'productos'
      return req.body[f] === undefined || req.body[f] === null || (typeof req.body[f] === 'string' && req.body[f].trim() === '');
    });

    if (missing.length) {
      return res.status(400).json({ mensaje: 'Faltan campos obligatorios', faltan: missing });
    }
    next();
  };
};
