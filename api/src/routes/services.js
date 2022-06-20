const { Router } = require('express');
const {getServices, getServiceById ,getServiceByCategoryId, postService, deleteService, updateService} = require('../controllers/services.js');

const router = Router();

router.get('/', getServices);

router.get('/category/:id',getServiceByCategoryId);

router.get('/:id',getServiceById);

router.post('/',postService);

router.put('/:id',updateService);

router.delete('/:id',deleteService);

module.exports = router;