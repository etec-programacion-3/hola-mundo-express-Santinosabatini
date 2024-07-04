import express from 'express';

const app = express();

/**
 * Manejador de la ruta raíz
 * @route GET /
 * @returns {string} - Retorna un mensaje de saludo
 */
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

/**
 * Manejador de la ruta saludo
 * @route GET /saludo
 * @returns {string} - Retorna un mensaje de saludo en español
 */
app.get('/saludo', (req, res) => {
  res.send('Hola muy buenas');
});

/**
 * Manejador de la ruta saludo con nombre
 * @route GET /saludo/:nombre
 * @param {string} nombre - El nombre a incluir en el saludo
 * @returns {string} - Retorna un mensaje de saludo personalizado en español
 */
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

app.listen(3000, () => {
  console.log('¡Aplicación de ejemplo escuchando en el puerto 3000!');
});
