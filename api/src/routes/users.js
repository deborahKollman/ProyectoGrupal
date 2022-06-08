const { Router } = require('express');
const { checkUser, getUsers, getUserDetail } = require('../controllers/users.js');

const router = Router();

router.get('/login', checkUser);
router.get('/', getUsers);
router.get('/:id', getUserDetail);

module.exports = router;
