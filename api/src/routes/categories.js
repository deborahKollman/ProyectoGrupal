const { Router } = require('express');
const {
  getCategories,
  getCategorieById,
  postCategory,
  deleteCategory,
  updateCategory,
  getCategoriesOnly
} = require('../controllers/categories.js');

const router = Router();

router.get('/', getCategories);
router.post('/', postCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);


router.get('/only',getCategoriesOnly);
router.get('/:id',getCategorieById)

module.exports = router;
