const { Router } = require('express');
const {
  checkUser,
  getUsers,
  getUserDetail,
  postUser,
  deleteUser,
  updateUser,
  registerUser,
  recoverUserPwd,
  updatePassword
} = require('../controllers/users.js');
const {upload } = require('../middlewares/index.js')

const router = Router();

router.get('/', getUsers);
router.get('/login', checkUser);
router.get('/:id', getUserDetail);
router.post('/',upload.array('pictures', 5), postUser);

/* router.post('/register', registerUser);
router.get('/recover', recoverUserPwd);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);
router.put('/recover', updatePassword); */


module.exports = router;
