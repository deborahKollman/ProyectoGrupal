const { Router } = require('express');
const {
  getCategories,
  getCategorieById,
  postCategory,
  deleteCategory,
  updateCategory
} = require('../controllers/categories.js');

const router = Router();

router.get('/', getCategories);
router.post('/', postCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);

router.get('/:id',getCategorieById)

router.post('/',postCategory)

module.exports = router;
