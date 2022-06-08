const { Router } = require('express');
const {
  getPublications,
  postPublication,
  deletePublication,
  updatePublication
} = require('../controllers/publications.js');

const router = Router();
const multer = require('multer');

const upload = multer ({
  dest: '../../public/img'
})


router.get('/', getPublications);
router.post('/', upload.single('file'), postPublication);
router.delete('/:id', deletePublication);
router.put('/:id', updatePublication);

module.exports = router;
