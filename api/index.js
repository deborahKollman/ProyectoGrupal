require('dotenv').config();

const { connection } = require('./src/database/postgres.js');
const server = require('./server');

// Importamos la variable de entorno PORT
const { PORT } = process.env || 3000;

connection.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto: ${PORT}`);
  });
});
