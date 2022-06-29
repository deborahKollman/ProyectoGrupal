const { Router } = require('express');
const router = Router();
const { getContracts, getContractById, getContractsPercentage, postContract, updateContract, deleteContract } = require('../controllers/contract.js');

router.get('/', getContracts);
router.get('/percentage',getContractsPercentage);
router.get('/:id', getContractById);
router.post('/', postContract);
router.put('/:id', updateContract);
router.delete('/:id', deleteContract);

module.exports = router;
