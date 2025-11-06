const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const archivos = {
  'productos.json': [],
  'categorias.json': [],
  'clientes.json': [],
  'pedidos.json': [],
  'carritos.json': [],
  'proveedores.json': []
};

module.exports = () => {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  Object.keys(archivos).forEach(nombre => {
    const ruta = path.join(dataDir, nombre);
    if (!fs.existsSync(ruta)) {
      fs.writeFileSync(ruta, JSON.stringify(archivos[nombre], null, 2));
      console.log(`Creado archivo: ${nombre}`);
    }
  });
};
