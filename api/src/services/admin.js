const { User } = require('../database/postgres.js')
const bcrypt = require('bcryptjs')

exports.createAdmin = async(properties) => {
    properties.password = bcrypt.hashSync(properties.password,10);
    properties.rol='admin'
    const [admin,created] = await User.findOrCreate({
        where:{email:properties.email},
        defaults:{...properties}
    });
   return [admin,created]
}
 
exports.getAllAdmins = async() => {
    const admins = await User.findAll({
        attributes:{exclude:['buyer_reputation','buyer_opinions','seller_reputation','seller_opinions']},
        where:{rol:'admin'},
        order: [['id', 'ASC']]
    });
    return admins
}

exports.getAdminById = async(id) => {
    const admin = await User.findOne({
        attributes:{exclude:['buyer_reputation','buyer_opinions','seller_reputation','seller_opinions']},
        where:{id}
    });
    if(admin){
        return admin
    }
    return {err_message:'Admin not found'}
}

exports.updateAdmin = async(id,changes) => {
    const admin = await User.findByPk(id);
    if(admin){
        await User.update({...changes},{where:{id}});
        return {message:'Admin updated successfully'}
    }
    return {err_message:'Admin not found'}
}

exports.deleteAdmin = async(id) => {
    const admin = await User.findByPk(id);
    if(admin){
        await User.destroy({where:{id}})
        return {message:'Admin deleted successfully'}
    }
    return {err_message:'Admin not found'}
}