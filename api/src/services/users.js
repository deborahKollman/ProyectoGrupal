
const { users } = require('../database/data.js');
const { User } = require('../database/postgres.js');
const bcrypt = require('bcryptjs');


exports.checkUser = (usr, password) => {
  // Chequea si el usuario existe y si la clave es correcta
  // Retorna:
  // -1 si el usr no existe, 0 si la clave es erronea y 1 si esta OK
  const usrFound = users.find((u) => u.usr_email === usr);
  if (!usrFound) return -1;
  else if (usrFound.usr_password === password) return usrFound;
  return 0;
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
  const [user, created] = await User.findOrCreate({
    where: { ...newUser },
    defaults: { ...newUser }
  });

  return [user, created];
};
exports.registerUser = (usr, password) => {
  // retorna un obj con el id de usuario si se registra correctamente o un obj con el motivo del error

  // Cambiar por el nuevo id registrado
  const idRegistered = 8;

  const usrFound = users.find((u) => u.usr_email === usr);
  if (usrFound) return { err_msg: 'Email is already registered' };
  else return { idRegistered };
};

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

    usrFound.update({password:hash})
    return { message: 'Password has been changed' };

  }else return { err_msg: 'Email is not registered' };
}