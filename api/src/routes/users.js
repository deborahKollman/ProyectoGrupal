const { Router } = require('express');
const {
  checkUser,
  getUsers,
  getActiveUsers,
  getUserDetail,
  postUser,
  deleteUser,
  updateUser,
  registerUser,
  recoverUserPwd,
  updatePassword,
  addBuyerOpinion,
  addSellerOpinion,
  getBuyerOpinions,
  getSellerOpinions,
  getFavorites,
  addFavorite,
  removeFavorite
} = require('../controllers/users.js');
const { upload } = require('../middlewares/index.js');

const router = Router();

router.get('/', getActiveUsers);
router.get('/all', getUsers);
// router.get('/register', checkUser);
router.post('/register', checkUser);
router.get('/:id', getUserDetail);
router.post('/', upload.single('avatar_image'), postUser);
router.put('/recover', updatePassword);
router.delete('/:id', deleteUser);
router.get('/:id/buyer_review', getBuyerOpinions);
router.get('/:id/seller_review', getSellerOpinions);
router.put('/:id/buyer_review', addBuyerOpinion);
router.put('/:id/seller_review', addSellerOpinion);
router.put('/:id', upload.single('avatar_image'), updateUser);

// Por body enviar id de publicacion
router.get('/:id/favorites', getFavorites);
router.post('/:id/favorites', addFavorite);
router.delete('/:id/favorites', removeFavorite);

/* router.post('/register', registerUser);
router.get('/recover', recoverUserPwd);

 */

module.exports = router;
