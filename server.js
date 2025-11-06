const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const initData = require('./initData');

app.use(express.json());
app.use(logger);

// Inicializa los archivos JSON
initData();

// Ejemplo de prueba rápida
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente' });
});

// Importa tus rutas reales (si ya las tienes)
app.use('/api/productos', require('./routes/productosRoutes'));
app.use('/api/categorias', require('./routes/categoriasRoutes'));
// Añade las demás rutas aquí...

app.listen(3000, () => console.log('Servidor iniciado en http://localhost:3000'));
