const { Router } = require('express');
const router = Router();
const fs = require('fs');

fs.readdirSync(__dirname).forEach((file) => {
  const [name] = file.split('.');
  if (name !== 'index') {
    router.use(`/${name}`, require(`./${name}`));
  }
});

router.get('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' });
});

module.exports = router;
