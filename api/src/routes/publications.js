const { Router } = require('express');
const {
  getPublications,
  postPublication,
  deletePublication,
  updatePublication
} = require('../controllers/publications.js');

const router = Router();

router.get('/', getPublications);
router.post('/', postPublication);
router.delete('/:id', deletePublication);
router.put('/:id', updatePublication);

module.exports = router;
