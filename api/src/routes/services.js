const { Router } = require('express');
const {getServices, getServiceById , postService, deleteService, updateService} = require('../controllers/services.js');

const router = Router();

router.get('/', getServices);

router.get('/:id',getServiceById);

router.post('/',postService);

router.put('/:id',updateService);

router.delete('/:id',deleteService);

module.exports = router;