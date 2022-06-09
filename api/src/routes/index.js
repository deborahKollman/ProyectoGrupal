const { Router } = require('express');
const router = Router();
const fs = require('fs');
const path = require('path');
const { OK, BAD_REQUEST } = require('./helpers/status');

fs.readdirSync(__dirname).forEach((file) => {
  const [name] = file.split('.');
  if (name !== 'index' && name !== 'helpers') {
    router.use(`/${name}`, require(`./${name}`));
  }
});

router.get('/public/img/pub/:id', (req, res)=>{
  const file = req.params.id;
  //const pub = req.params.pub;
  //console.log(pub,file)
  res.download('./public/img/pub/'+file, file)
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
