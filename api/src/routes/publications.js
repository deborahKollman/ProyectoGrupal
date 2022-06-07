const { Router } = require('express');
const { getPublications } = require('../controllers/publications.js');

const router = Router();

router.get('/', getPublications);

module.exports = router;
