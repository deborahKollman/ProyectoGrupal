const {Contract, User, Publication} = require('../database/postgres.js')

exports.getContracts = async () => {
    const contract = await Contract.findAll({
        include:[{
            model:User,
            attributes:{exclude:['buyer_reputation','buyer_opinions','seller_reputation','seller_opinions']}
        },{
            model: Publication
        }],
        order: [['id', 'DESC']]
    });
    return contract;
}

exports.getContractById = async (id) => {
    const contract = await Contract.findOne({
        where:{id},
        include:[{
            model:User,
            attributes:{exclude:['buyer_reputation','buyer_opinions','seller_reputation','seller_opinions']}
        },{
            model: Publication
        }]
    }) 
    if(contract){
        return contract;
    }
    return {err_message:'Contract not found'}

}

exports.createContract = async (user, publication, country, postal_code, state, city, address, service_date) => {
    console.log('user',user)
    if(!user){
        return {err_message:'Must send user(id)'}
    }
    const usr = await User.findOne({where:{id:user}});
    if(usr){
        if(!publication){
            return {err_message:'Must send publication(id)'}
        }
        const pub = await Publication.findOne({where:{id:publication}});
        if(pub){
            const contract = await Contract.create({country, postal_code, city, state, address, service_date});
            contract.setUser(user);
            contract.setPublication(publication);
            return contract;
        }
        return {err_message:'Publication not found'}
    } 
    return {err_message:'User not found'}
}

exports.updateContract = async (id,changes) => {
    const contract = await Contract.findOne({where:{id}});
    if(contract){
        await Contract.update({...changes},{where:{id}});
        return {message:'Contract updated successfully'};
    }
    return {err_message:'Contract not found'}
}

exports.deleteContract = async (id) => {
    const contract= await Contract.findOne({where:{id}});
    if(contract){
        await Contract.destroy({where:{id}});
        return {message:'Contract deleted successfully'};
    }
    return {err_message:'Contract not found'}
}