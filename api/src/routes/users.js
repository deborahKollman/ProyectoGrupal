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
  updatePassword,
  addBuyerOpinion,
  addSellerOpinion
} = require('../controllers/users.js');
const {upload } = require('../middlewares/index.js')

const router = Router();

router.get('/', getUsers);
router.get('/login', checkUser);
router.get('/:id', getUserDetail);
router.post('/',upload.single('avatar_image'), postUser);
router.put('/recover', updatePassword);
router.delete('/:id', deleteUser);
router.put('/:id/buyer_review',addBuyerOpinion);
router.put('/:id/seller_review',addSellerOpinion);
router.put('/:id', updateUser);

/* router.post('/register', registerUser);
router.get('/recover', recoverUserPwd);

 */


module.exports = router;
