const { Router } = require('express');
const {upload } = require('../middlewares/index.js')

const {
  getPublications,
  postPublication,
  deletePublication,
  updatePublication
} = require('../controllers/publications.js');

const router = Router();

router.get('/', getPublications);
router.post('/', upload.array('pictures', 5), postPublication);
router.delete('/:id', deletePublication);
router.put('/:id', updatePublication);

module.exports = router;
