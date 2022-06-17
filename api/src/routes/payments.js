const { Router } = require('express');
const {getPayments,postPayment} = require('../controllers/payments.js');

const router = Router();

router.get('/', getPayments);
router.post('/',postPayment);

/*
router.get('/:id',getServiceById);



router.put('/:id',updateService);

router.delete('/:id',deleteService); */

module.exports = router;