const fs = require('fs');
const path = require('path');

// Define la ruta al archivo JSON de clientes
const rutaClientes = path.join(__dirname, '../data/clientes.json');

// --- Funciones de Utilidad ---
function leer() {
    // Asegura que el archivo exista antes de intentar leerlo
    if (!fs.existsSync(rutaClientes)) {
        return [];
    }
    try {
        const data = fs.readFileSync(rutaClientes, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer clientes.json:", error);
        return [];
    }
}

function guardar(datos) {
    fs.writeFileSync(rutaClientes, JSON.stringify(datos, null, 2));
}

// --- Operaciones CRUD ---

// Listar todos los clientes
exports.listar = () => leer();

// Buscar un cliente por su ID
exports.buscarPorId = (id) => leer().find(c => c.id === id);

// Crear un nuevo cliente
exports.crear = (nuevo) => {
    const datos = leer();
    // Asigna el siguiente ID
    nuevo.id = datos.length ? Math.max(...datos.map(c => c.id)) + 1 : 1;
    datos.push(nuevo);
    guardar(datos);
    return nuevo;
};

// Actualizar un cliente existente
exports.actualizar = (id, cambios) => {
    const datos = leer();
    const index = datos.findIndex(c => c.id === id);

    if (index === -1) {
        return null; // Cliente no encontrado
    }

    // Aplica los cambios y mantiene el ID
    datos[index] = { ...datos[index], ...cambios, id: id };
    guardar(datos);
    return datos[index];
};

// Eliminar un cliente por su ID
exports.eliminar = (id) => {
    const datos = leer();
    const index = datos.findIndex(c => c.id === id);

    if (index === -1) {
        return null; // Cliente no encontrado
    }

    const eliminado = datos.splice(index, 1);
    guardar(datos);
    return eliminado[0];
};