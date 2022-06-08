const { Router } = require('express');
const { checkUser, registerUser, recoverUserPwd, getUsers, getUserDetail } = require('../controllers/users.js');

const router = Router();

router.post('/register', registerUser);
router.get('/login', checkUser);
router.post('/logout', recoverUserPwd);
router.get('/recover', recoverUserPwd);
router.get('/', getUsers);
router.get('/:id', getUserDetail);

module.exports = router;
