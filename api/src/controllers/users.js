const { checkUser, createUser, getAllUsers ,recoverUserPwd, updatePassword} = require('../services/users.js');
const { User } = require('../database/postgres');
const { OK, BAD_REQUEST, CREATED } = require('../routes/helpers/status');
const {HOST,PORT}=process.env


exports.checkUser = async(req, res, next) => {
  // Retorna:
  // Si el usuario no existe: 401, msg: Usuario no registrado
  // Si la clave es erronea: 401, msg Clave errónea
  try {
    const { email, password } = req.body;
    const r = await checkUser(email,password);
    if(r.err_msg){
      res.status(BAD_REQUEST).send(r.err_msg);
    }
    res.status(OK).json(r);
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
    var newUser=req.body;
    if(req.file){
      const avatar_image = 'http://' + HOST + ':' + PORT + req.file.destination.slice(1) + '/' + req.file.filename;
      newUser={...newUser,avatar_image}
    }
    const [user,created] = await createUser(newUser);
    if(created){
      return res.status(CREATED).json(user);
    }
    return res.status(BAD_REQUEST).json({message:'User not created'})
  } catch (error) {
    next(error);
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

exports.recoverUserPwd = async(req,res,next) => {
  try {
    const r = await recoverUserPwd(req.body.email);
    if(r.err_msg){
      return res.status(BAD_REQUEST).send(r.err_msg)
    }
    return res.status(OK).send(r.message)
  } catch (error) {
    next(error);
  }
}

exports.updatePassword = async(req,res,next) => {
  try {
    const r = await updatePassword(req.body.email,req.body.password);
    if(r.err_msg){
      return res.status(BAD_REQUEST).send(r.err_msg)
    }
    return res.status(OK).send(r.message)
  } catch (error) {
    next(error)
  }
}