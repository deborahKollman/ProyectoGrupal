const { checkUser, registerUser, recoverUserPwd } = require('../services/users.js');

exports.checkUser = (req, res, next) => {
  // Retorna:
  // Si el usuario no existe: 401, msg: Usuario no registrado
  // Si la clave es erronea: 401, msg Clave errónea
  try {
    const { user, password } = req.body;
    const checkResult = checkUser(user, password);
    if (checkResult === -1) {
      return res.status(401).send({ message: 'Nonexistent user' });
    }
    if (checkResult === 0) {
      return res.status(401).send({ message: 'Wrong password' });
    }
    return res.status(200).send({
      usr_email: checkResult.usr_email,
      usr_name: checkResult.usr_name,
      usr_rol: checkResult.usr_rol,
      usr_country: checkResult.usr_country,
      usr_province_state: checkResult.usr_province_state,
      usr_buyer_reputation: checkResult.usr_buyer_reputation,
      usr_buyer_opinions: checkResult.usr_buyer_opinions,
      usr_seller_reputation: checkResult.usr_seller_reputation,
      usr_seller_opinions: checkResult.usr_seller_opinions
    });
  } catch (error) {
    next(error);
  }
};

exports.registerUser = (req, res, next) => {
  try {
    const { user, password } = req.body;
    const registerResult = registerUser(user, password);
    if (registerResult.error_msg) res.status(401).send(registerResult);
    else {
      return res.status(200).send(registerResult);
    }
  } catch (error) {
    next(error);
  }
};

exports.recoverUserPwd = (req, res, next) => {
  try {
    const { user } = req.body;
    const recoveryResult = recoverUserPwd(user);
    if (recoveryResult.error_msg) res.status(400).send(recoveryResult);
    else {
      return res.status(200).send(recoveryResult);
    }
  } catch (error) {
    next(error);
  }
};

exports.getUsers = (req, res, next) => {
  try {
    res.send({
      name: 'name',
      lastName: 'lastName',
      user: 'http://localhost:3001/login/user'
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserDetail = (req, res, next) => {
  const { id } = req.params;

  try {
    if (id === '1') {
      res.send({
        name: 'name',
        lastName: 'lastName',
        ci: '000000000',
        age: 20
      });
    } else {
      res.status(404).send({
        message: 'User not found'
      });
    }
  } catch (error) {
    next(error);
  }
};
