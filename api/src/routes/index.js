const { Router } = require('express');
const router = Router();
const fs = require('fs');
const path = require('path');
const { OK, BAD_REQUEST } = require('./helpers/status');

const fx = require('../database/cargabase.js');

fs.readdirSync(__dirname).forEach((file) => {
  const [name] = file.split('.');
  if (name !== 'index' && name !== 'helpers') {
    router.use(`/${name}`, require(`./${name}`));
  }
});

// solo para las imagenes de carga base de prueba
router.get('/public/img/test/:id', (req, res) => {
  const file = req.params.id;
  res.download('./public/img/test/' + file, file);
});
//

router.get('/public/img/pub/:id', (req, res) => {
  const file = req.params.id;
  res.download('./public/img/pub/' + file, file);
});

router.get('/cargabase', (req, res) => {
  fx();
  res.send('ok');
});

router.get('/', (req, res) => {
  res.status(OK).json({
    status: OK,
    message: 'Welcome to the API "ServiExpress"'
  });
});

router.get('*', (req, res) => {
  res.status(BAD_REQUEST).send({ message: 'Not Found' });
});

module.exports = router;
