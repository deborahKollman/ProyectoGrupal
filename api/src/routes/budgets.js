const { Router } = require('express');
const router = Router();
const { getBudgets, getBudgetById, postBudget, updateBudget, deleteBudget, postChat, getChat } = require('../controllers/budget.js');

router.get('/', getBudgets);
router.get('/:id', getBudgetById);
router.post('/', postBudget);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

router.post('/chat', postChat); // Por body {budgetId , comment}
router.get('/chat/:id', getChat);

module.exports = router;
