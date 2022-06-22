const { Router } = require('express');
const { upload } = require('../middlewares/index.js');

const {
  getPublications,
  getPublicationDetails,
  postPublication,
  deletePublication,
  updatePublication,
  getPublicationsByTitle,
  getPublicationsByCategory,
  getPublicationsByUserId
} = require('../controllers/publications.js');

const router = Router();

router.get('/', getPublications);
router.get('/:id', getPublicationDetails);
router.get('/title/:title', getPublicationsByTitle);
router.get('/category/:categoryId', getPublicationsByCategory);
router.get('/user/:userId',getPublicationsByUserId);
router.post('/', upload.array('pictures', 5), postPublication);
router.delete('/:id', deletePublication);
router.put('/:id', updatePublication);

module.exports = router;
