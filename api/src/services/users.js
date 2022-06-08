const { users } = require('../database/data.js');

exports.checkUser = (usr, password) => {
  // Chequea si el usuario existe y si la clave es correcta
  // Retorna:
  // -1 si el usr no existe, 0 si la clave es erronea y 1 si esta OK
  const usrfound = users.find((u) => u.usr_email === usr);
  if (!usrfound) return -1;
  else if (usrfound.usr_password === password) return usrfound;
  return 0;
};
