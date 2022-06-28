const { Router } = require('express');
const { upload } = require('../middlewares/index.js');
const router = Router();
const { getBudgets, getBudgetById, postBudget, updateBudget, deleteBudget, postChat, getChat } = require('../controllers/budget.js');

router.get('/', getBudgets);
router.get('/:id', getBudgetById);
router.post('/', upload.array('pictures', 5), postBudget);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

router.post('/chat', postChat); // Por body {budgetId , comment}
router.get('/chat/:id', getChat);

module.exports = router;
