const { Router } = require('express');
const { checkUser, registerUser, recoverUserPwd, getUsers, getUserDetail } = require('../controllers/users.js');

const router = Router();

router.get('/login', checkUser);
router.post('/register', registerUser);
router.get('/recover', recoverUserPwd);
router.get('/', getUsers);
router.get('/:id', getUserDetail);

module.exports = router;
