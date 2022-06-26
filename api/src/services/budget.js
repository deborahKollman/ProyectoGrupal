const {Budget, Chat, Contracts, Publication} = require('../database/postgres.js')


exports.createBudget = async (newbudget) => {
    const { publicationId } = newbudget;
    const pub = await Publication.findOne({ where: { id: publicationId } });
    console.log(pub)
    if (pub) {
        const budget = await Budget.create(newbudget)
    
        console.log('BUdget:',budget)
        return budget
    } else {
        return {message:'Budget not created'}
    }
}

/* exports.getBudgets = async () => {
    const budget = await Budget.findAll();
    return budget;
} */

exports.getBudgets = async () => {
    const budget = await Budget.findAll({
        include:[{
            model: Chat
            //attributes:{exclude:['buyer_reputation','buyer_opinions','seller_reputation','seller_opinions']}
        }],
        order: [['id', 'ASC']]
    });
    return budget;
}

exports.getBudgetById = async () => {

}

exports.updateBudget = async () => {

}

exports.deleteBudget = async () => {

}

exports.postChat = async (budgetId, comment, id_sender, id_receiver)=> {
    try{   
        const budget = await Budget.findOne({ where: { id: budgetId } })

        const chat = await Chat.create({budgetId, comment, id_sender, id_receiver})


        if (chat) {
            console.log(budget);
            console.log(chat);
            //const r= await budget.setChats(chat);
            //onsole.log('*******Relacion****',r)
            return chat
        } else {
            return {message: 'Comentario no insertado'}
        }
    } catch (error) {
    next(error);
  }
};

exports.getChat = async (id) => {
    
    try {
        const chat = await Budget.findAll({
             where: { id_seller: id },
            include: [{
                model: Chat
            }]
        
        });


        return chat;


        
    } catch (error) {
        next(error);
    }



};