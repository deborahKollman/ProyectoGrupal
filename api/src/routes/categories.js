const { Router } = require('express');
const {
  getCategories,
  postCategory,
  deleteCategory,
  updateCategory
} = require('../controllers/categories.js');

const router = Router();

router.get('/', getCategories);
router.post('/', postCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);

module.exports = router;
