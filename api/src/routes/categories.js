const { Router } = require('express');
const { getCategories,getCategorieById ,postCategory} = require('../controllers/categories.js');

const router = Router();

router.get('/', getCategories);

router.get('/:id',getCategorieById)

router.post('/',postCategory)

module.exports = router;
