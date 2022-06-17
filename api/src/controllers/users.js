const {
  checkUser,
  createUser,
  getAllUsers,
  getAllActiveUsers,
  recoverUserPwd,
  updatePassword,
  updateUser,
  deleteUser,
  addBuyerComment,
  addSellerComment,
  getBuyerComments,
  getSellerComments,
  getFavorites,
  addFavorite,
  removeFavorite
} = require('../services/users.js');
const { User } = require('../database/postgres');
const { OK, BAD_REQUEST, CREATED } = require('../routes/helpers/status');
const { HOST, PORT } = process.env;

exports.checkUser = async (req, res, next) => {
  // Retorna {message: 1} si lo encuentra; sino  {message: 0}
  try {
    const {email, password} = req.body;
    const r = await checkUser(email);
    res.status(OK).send(r)
  } catch (error) {
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  if (!req.query.limit || !req.query.offset) {
    let avatar_image;
    if (process.env.API) {
      return res.redirect(
        `http://${process.env.API}/users/all?page=1&offset=10&limit=10`
      )
    }else{
      return res.redirect(
        'http://localhost:3001/users/all?page=1&offset=10&limit=10'
      )
    }
  }
  try {
    const response = await getAllUsers(req.query);
    res.status(OK).json(response);
  } catch (error) {
    next(error);
  }
};

exports.getActiveUsers = async (req, res, next) => {
  if (!req.query.limit || !req.query.offset) {
    let avatar_image;
    if (process.env.API) {
      return res.redirect(
        `http://${process.env.API}/users?page=1&offset=10&limit=10`
      );
    } else {
      return res.redirect(
        'http://localhost:3001/users?page=1&offset=10&limit=10'
      );
    }
  }
  try {
    const response = await getAllActiveUsers(req.query);
    res.status(OK).json(response);
  } catch (error) {
    next(error);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    let newUser = req.body;
    if (req.file) {
      let avatar_image;
      process.env.API
        ? (avatar_image =
            'http://' +
            process.env.API +
            req.file.destination.slice(1) +
            '/' +
            req.file.filename)
        : (avatar_image =
            'http://' +
            HOST +
            ':' +
            PORT +
            req.file.destination.slice(1) +
            '/' +
            req.file.filename);
      newUser = { ...newUser, avatar_image };
    }
    const [user, created] = await createUser(newUser);
    if (created) {
      return res.status(CREATED).json(user);
    } else {
      return res.status(BAD_REQUEST).json({ message: 'User already exists' });
    }
  } catch (error) {
    next(error);
  }
};

exports.getUserDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(BAD_REQUEST).send({ message: 'User not found' });
    } else {
      return res.status(OK).send({
        user
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    if (req.file) {
      let avatar_image;
      process.env.API
        ? (avatar_image =
            'http://' +
            process.env.API +
            req.file.destination.slice(1) +
            '/' +
            req.file.filename)
        : (avatar_image =
            'http://' +
            HOST +
            ':' +
            PORT +
            req.file.destination.slice(1) +
            '/' +
            req.file.filename);
      changes = { ...changes, avatar_image };
    }
    const r = await updateUser(id, changes);
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const r = await deleteUser(id);
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.recoverUserPwd = async (req, res, next) => {
  try {
    const r = await recoverUserPwd(req.body.email);
    if (r.err_msg) {
      return res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      return res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const r = await updatePassword(req.body.email, req.body.password);
    if (r.err_msg) {
      return res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      return res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.addBuyerOpinion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rating, comment, commenter, buyer_avatar } = req.body;
    const r = await addBuyerComment(
      id,
      rating,
      comment,
      commenter,
      buyer_avatar
    );
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.addSellerOpinion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rating, comment, commenter } = req.body;
    const r = await addSellerComment(id, rating, comment, commenter);
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.getBuyerOpinions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { count } = req.body;
    const r = await getBuyerComments(id, count);
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).json(r);
    }
  } catch (error) {
    next(error);
  }
};

exports.getSellerOpinions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { count } = req.body;
    const r = await getSellerComments(id, count);
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).json(r);
    }
  } catch (error) {
    next(error);
  }
};

exports.getFavorites = async (req, res, next) => {
  try {
    const { id } = req.params;
    const r = await getFavorites(id);
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).json(r);
    }
  } catch (error) {
    next(error);
  }
};

exports.addFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const r = await addFavorite(id, req.body.id);
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.removeFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const r = await removeFavorite(id, req.body.id);
    if (r.err_msg) {
      res.status(BAD_REQUEST).send(r.err_msg);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};
