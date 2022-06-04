const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.js');
const dotenv = require('dotenv');

dotenv.config();
require('./database/index.js');
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('combined'));

// Enrutador
app.use('/', router);

//Endwares
app.use((error, req, res, next) => {
  res.status(500).send({ msg_error: error.message });
});

// Importamos la variable de entorno PORT
const { PORT } = process.env || 3000;

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto: ${PORT}`);
});
