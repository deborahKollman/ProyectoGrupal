const { Router } = require('express');
const {
  checkUser,
  getUsers,
  getUserDetail,
  postUser,
  deleteUser,
  updateUser
} = require('../controllers/users.js');

const router = Router();

router.get('/login', checkUser);

router.get('/', getUsers);
router.get('/:id', getUserDetail);
router.post('/', postUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
