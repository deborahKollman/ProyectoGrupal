const { users } = require('../database/data.js');

exports.checkUser = (usr, password) => {
  // Chequea si el usuario existe y si la clave es correcta
  // Retorna:
  // -1 si el usr no existe, 0 si la clave es erronea y 1 si esta OK
  const usrFound = users.find((u) => u.usr_email === usr);
  if (!usrFound) return -1;
  else if (usrFound.usr_password === password) return usrFound;
  return 0;
};

exports.registerUser = (usr, password) => {
  // retorna un obj con el id de usuario si se registra correctamente o un obj con el motivo del error

  // Cambiar por el nuevo id registrado
  const idRegistered = 8;

  const usrFound = users.find((u) => u.usr_email === usr);
  if (usrFound) return { err_msg: 'Email is already registered' };
  else return { idRegistered };
};

exports.recoverUserPwd = (usr) => {
  const usrFound = users.find((u) => u.usr_email === usr);
  if (!usrFound) return { err_msg: 'Email is not registered' };
  else return ({ message: 'The recovery email was send' });
};
