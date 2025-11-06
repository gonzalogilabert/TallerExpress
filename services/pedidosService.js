const fs = require('fs');
const path = require('path');

const rutaPedidos = path.join(__dirname, '../data/pedidos.json');
const rutaProductos = path.join(__dirname, '../data/productos.json');
const rutaClientes = path.join(__dirname, '../data/clientes.json');

function leer(ruta) {
  if (!fs.existsSync(ruta)) return [];
  return JSON.parse(fs.readFileSync(ruta, 'utf-8'));
}
function guardar(ruta, datos) { fs.writeFileSync(ruta, JSON.stringify(datos, null, 2)); }

exports.listar = () => leer(rutaPedidos);

exports.listarConProductos = () => {
  const pedidos = leer(rutaPedidos);
  const productos = leer(rutaProductos);
  const clientes = leer(rutaClientes);
  return pedidos.map(p => {
    const productosDetalle = (p.productos || []).map(pid => productos.find(prod => prod.id === pid)).filter(Boolean);
    const cliente = clientes.find(c => c.id === p.clienteId);
    return {
      id: p.id,
      cliente: cliente ? { id: cliente.id, nombre: cliente.nombre, email: cliente.email } : { id: p.clienteId, nombre: 'Cliente no encontrado' },
      fecha: p.fecha,
      total: p.total,
      productos: productosDetalle
    };
  });
};

exports.crear = (nuevo) => {
  const datos = leer(rutaPedidos);
  nuevo.id = datos.length ? Math.max(...datos.map(p => p.id)) + 1 : 1;
  datos.push(nuevo);
  guardar(rutaPedidos, datos);
  return nuevo;
};

// actualizar / eliminar si los necesitas (similar patrón)
