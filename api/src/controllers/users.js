const { checkUser, createUser, getAllUsers } = require('../services/users.js');
const { User } = require('../database/postgres');
const { OK, BAD_REQUEST, CREATED } = require('../routes/helpers/status');

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

exports.getUsers = async (req, res, next) => {
  if (!req.query.limit || !req.query.offset) {
    return res.redirect(
      'http://localhost:3001/users?page=1&offset=10&limit=10'
    );
  }
  try {
    const response = await getAllUsers(req.query);
    res.status(OK).json(response);
  } catch (error) {
    next(error);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const [created, userCreated] = await createUser(req.body);
    if (userCreated) {
      return res.status(CREATED).json({
        created
      });
    }
    return res.status(BAD_REQUEST).json({
      message: 'User not created'
    });
  } catch (error) {
    res.send({ error });
  }
};

exports.getUserDetail = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(BAD_REQUEST).send({ message: 'User not found' });
    }
    return res.status(OK).send({
      user
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = (req, res, next) => {
  res.send('Listo');
};
exports.deleteUser = (req, res, next) => {
  res.send('Listo');
};
