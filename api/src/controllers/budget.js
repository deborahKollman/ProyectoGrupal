
const {createBudget, deleteBudget, getBudgetById, getBudgets, updateBudget, postChat,getChat} = require('../services/budget.js')
const {BAD_REQUEST, CREATED, OK} = require('../routes/helpers/status.js')

exports.getBudgets = async (req, res, next) => {
    try {
        const r = await getBudgets();
        r.message ? res.status(BAD_REQUEST).send(r.message) : res.status(CREATED).send(r);
      } catch (error) {
        next(error);
      } 
}

exports.getBudgetById = async (req, res, next) => {
}

exports.postBudget = async (req, res, next) => {
    try {
        const r = await createBudget(req.body);
        res.status(CREATED).send(r.message);
      } catch (error) {
        next(error);
      }
}

exports.updateBudget = async (req, res, next) => {
}

exports.deleteBudget = async (req, res, next) => {
}

exports.postChat = async (req, res, next) => {
    try {
        const {budgetId , comment, id_sender, id_receiver} = req.body;
        const r = await postChat(budgetId, comment, id_sender, id_receiver);
        //r.message ? res.status(BAD_REQUEST).send(r.message) : res.status(CREATED).send(r);
        res.status(CREATED).send(r)
      } catch (error) {
        next(error);
      }
}

exports.getChat = async (req, res, next) => {
        const {id} = req.params;
    try {
        const r = await getChat(id);
        
        res.status(OK).send(r);



    } catch (error) {
        next(error)
    }



};