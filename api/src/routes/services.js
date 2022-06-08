const { Router } = require('express');
const {getServices, getServiceById , postService} = require('../controllers/services.js');

const router = Router();

router.get('/', getServices);

router.get('/:id',getServiceById);

router.post('/',postService);

module.exports = router;