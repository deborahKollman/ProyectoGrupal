
const { users } = require('../database/data.js');
const { User, Favorite, Publication } = require('../database/postgres.js');
const bcrypt = require('bcryptjs');


/* exports.checkUser = async(usr, password) => {
  // Chequea si el usuario existe y si la clave es correcta
  const user = await User.findOne({where:{email:usr}})

  if(user){
    if(bcrypt.compareSync(password,user.dataValues.password)){
      return user;
    }else{
      return {err_msg:'Contraseña incorrecta'}
    }
  }
  return {err_msg:'Usuario no encontrado'}
}; */

exports.checkUser = async(usr) => {
  // Chequea si el usuario existe
  const user = await User.findOne({where:{email:usr}})

  if(user){
    return {message: 1}
  } else {
    return {message: 0}
  };
};

exports.getAllUsers = async ({ page, offset, limit }) => {
  const users = await User.findAll({
    offset: (page - 1) * offset,
    limit,
    order: [['id', 'ASC']]
  });
  const count = await User.count();

  return {
    count,
    page: +page,
    next:
      +page >= Math.ceil(count / limit)
        ? null
        : `http://localhost:3001/users?page=${
            +page + 1
          }&offset=${offset}&limit=${limit}`,
    previous:
      +page <= 1
        ? null
        : `http://localhost:3001/users?page=${
            +page - 1
          }&offset=${offset}&limit=${limit}`,
    users
  };
};
exports.createUser = async (newUser) => {
  var hash = bcrypt.hashSync(newUser.password, 10);
  newUser={...newUser,password:hash};
  const [user,created] = await User.findOrCreate({
    where:{email:newUser.email},
    defaults:{...newUser}
  })
  user.createFavorite();
  return [user,created];
};
exports.registerUser = (usr, password) => {
  // retorna un obj con el id de usuario si se registra correctamente o un obj con el motivo del error

  // Cambiar por el nuevo id registrado
  const idRegistered = 8;

  const usrFound = User.findOne({where:{email:usr}});
  if (usrFound) return { err_msg: 'Email is already registered' };
  else return { idRegistered };
};

exports.updateUser = async(id,changes) => {
  const user = await User.findByPk(id)
  if(user){
    await User.update({...changes},{where:{id}})
    return {message:'User updated successfully'}
  }
  return {err_msg:'User not found'}
}

exports.recoverUserPwd = async(usr) => {
  //const usrFound = users.find((u) => u.usr_email === usr);
  const usrFound = await User.findOne({
    where:{email:usr}
  })

  if (!usrFound) return { err_msg: 'Email is not registered' };
  else return { message: 'The recovery email was send' };
};

exports.updatePassword = async(email,password) => {
 
  const usrFound = await User.findOne({
    where:{email:email}
  })
  
  if (usrFound){ 
    var hash = bcrypt.hashSync(password, 10);
    if(bcrypt.compareSync(password,usrFound.dataValues.password)){
      return {err_msg:'Password cannot be previous password'}
    }

    User.update({password:hash},{where:{email}})
    return { message: 'Password has been changed' };

  }else return { err_msg: 'Email is not registered' };
}

exports.deleteUser = async(id) => {
  const user = await User.findByPk(id);
  if(user){
    await User.destroy({where:{id}})
    return {message:'User deleted successfully'}
  }
  return {err_msg:'User not found'}
}

exports.getSellerComments = async(id,count=0) => {
  const user = await User.findByPk(id);
  if(user){
    const comments = user.dataValues.seller_opinions.slice(-count)
    return comments;
  }
  return {err_msg:'User not found'}
}

exports.getBuyerComments = async(id,count=0) => {
  const user = await User.findByPk(id);
  if(user){
    const comments = user.dataValues.buyer_opinions.slice(-count)
    return comments;
  }
  return {err_msg:'User not found'}
}

exports.addSellerComment = async(id,rating,comment,commenter) => {
  const user = await User.findByPk(id);
  if(user){
    const opinion={commenter,comment,rating};
    var comm=user.dataValues.seller_opinions;
    var rep=user.dataValues.seller_reputation;
    var rep=(rep*comm.length+rating)/(comm.length+1);
    comm.push(opinion);
    await User.update({seller_reputation:rep,seller_opinions:comm},{where:{id}})
    return {message:'Comment added successfully'}
  }
  return {err_msg:'User not found'}
}

exports.addBuyerComment = async(id,rating,comment,commenter) => {
  const user = await User.findByPk(id);
  if(user){
    const opinion={commenter,comment,rating};
    var comm=user.dataValues.buyer_opinions
    var rep=user.dataValues.buyer_reputation;
    var rep=(rep*comm.length+rating)/(comm.length+1);
    comm.push(opinion);
    await User.update({buyer_reputation:rep, buyer_opinions:comm},{where:{id}})
    return {message:'Comment added successfully'}
  }
  return {err_msg:'User not found'}
}

exports.getFavorites = async(id) => {
  
  const favorites = await Favorite.findOne({
    where:{userId:id},
    include: {
      model:Publication,
      through:{
        attributes:[]
      }}
  });
  if(!favorites){
    return {err_msg:'User not found'}
  }
  return favorites
}

exports.addFavorite = async(id, publication) => {
  const fav = await Favorite.findOne({where:{userId:id}});
  if(fav){
    fav.addPublication(publication.id);
    return {message:'Publication added to Favorites'}
  }
  return {err_msg:'User not found'}
}

exports.removeFavorite = async(id, publication) => {
  const fav = await Favorite.findOne({where:{userId:id}});
  if(fav){
    fav.removePublication(publication.id);
    return {message:'Publication removed from Favorites'}
  }
  return {err_msg:'User not found'}
}