const fs = require('fs');
const path = require('path');

const rutaCarritos = path.join(__dirname, '../data/carritos.json');
const rutaProductos = path.join(__dirname, '../data/productos.json');

function leer(ruta) { if (!fs.existsSync(ruta)) return []; return JSON.parse(fs.readFileSync(ruta, 'utf-8')); }
function guardar(ruta, datos) { fs.writeFileSync(ruta, JSON.stringify(datos, null, 2)); }

exports.listar = () => leer(rutaCarritos);

exports.listarConProductos = () => {
  const carritos = leer(rutaCarritos);
  const productos = leer(rutaProductos);
  return carritos.map(c => {
    const productosDetalle = (c.productos || []).map(pid => productos.find(prod => prod.id === pid)).filter(Boolean);
    return {
      id: c.id,
      clienteId: c.clienteId,
      productos: productosDetalle
    };
  });
};

exports.crear = (nuevo) => {
  const datos = leer(rutaCarritos);
  nuevo.id = datos.length ? Math.max(...datos.map(p => p.id)) + 1 : 1;
  datos.push(nuevo);
  guardar(rutaCarritos, datos);
  return nuevo;
};
