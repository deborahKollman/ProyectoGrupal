const { createAdmin, getAllAdmins, getAdminById, updateAdmin, deleteAdmin, getAllActiveAdmins } = require('../services/admin.js');
const { BAD_REQUEST, CREATED, OK } = require('../routes/helpers/status.js');
const { HOST, PORT } = process.env;

exports.postAdmin = async(req, res, next) => {
  try {
    let newUser = req.body;
    if (req.file) {
      let avatar_image;
      (process.env.API)
        ? (avatar_image = 'http://' + process.env.API + req.file.destination.slice(1) + '/' + req.file.filename)
        : (avatar_image = 'http://' + HOST + ':' + PORT + req.file.destination.slice(1) + '/' + req.file.filename);
      newUser = { ...newUser, avatar_image };
    }
    const [admin, created] = await createAdmin(newUser);
    if (!created) {
      res.status(BAD_REQUEST).send('Email already registered');
    } else {
      res.status(CREATED).json(admin);
    }
  } catch (error) {
    next(error);
  }
};

exports.getAllActiveAdmins = async(req, res, next) => {
  try {
    const r = await getAllActiveAdmins();
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};

exports.getAllAdmins = async(req, res, next) => {
  try {
    const r = await getAllAdmins();
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};

exports.getAdminById = async(req, res, next) => {
  try {
    const r = await getAdminById(req.params.id);
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(OK).json(r);
    }
  } catch (error) {
    next(error);
  }
};

exports.updateAdmin = async(req, res, next) => {
  try {
    let changes = req.body;
    if (req.file) {
      let avatar_image;
      process.env.API
        ? (avatar_image = 'http://' + process.env.API + req.file.destination.slice(1) + '/' + req.file.filename)
        : (avatar_image = 'http://' + HOST + ':' + PORT + req.file.destination.slice(1) + '/' + req.file.filename);
      changes = { ...changes, avatar_image };
    }
    const r = await updateAdmin(req.params.id, changes);
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteAdmin = async(req, res, next) => {
  try {
    const r = await deleteAdmin(req.params.id);
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};
