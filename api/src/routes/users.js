const { Router } = require('express');
const {
  checkUser,
  getUsers,
  getUserDetail,
  postUser,
  deleteUser,
  updateUser,
  registerUser,
  recoverUserPwd
} = require('../controllers/users.js');

const router = Router();

router.post('/register', registerUser);
router.get('/login', checkUser);
router.post('/logout', recoverUserPwd);
router.get('/recover', recoverUserPwd);
router.get('/', getUsers);
router.get('/:id', getUserDetail);
router.post('/', postUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
