const { Router } = require('express');
const users_routes = require('./users.js');

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.use('/users', users_routes);

module.exports = router;
