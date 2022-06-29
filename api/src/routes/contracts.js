const { Router } = require('express');
const router = Router();
const { getContracts, getContractById, postContract, updateContract, updateContractReview, deleteContract } = require('../controllers/contract.js');

router.get('/', getContracts);
router.get('/:id', getContractById);
router.post('/', postContract);
router.put('/:id', updateContract);
router.put('/review/:id', updateContractReview);
router.delete('/:id', deleteContract);

module.exports = router;
