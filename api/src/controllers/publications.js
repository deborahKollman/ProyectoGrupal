const { getPublications } = require('../services/publications.js');

exports.getPublications = (req, res, next) => {
  // Recibe offset y nros de registros a devolver x body
  try {
    const { offset = 0, limit = 0 } = req.body;
    console.log(offset, limit);
    const r = getPublications(offset, limit);
    res.json(r);
  } catch (error) {
    next(error);
  }
};

exports.postPublication = (req, res, next) => {
  // Recibe offset y nros de registros a devolver x body
  try {
    const { offset = 0, limit = 0 } = req.body;
    console.log(offset, limit);
    const r = getPublications(offset, limit);
    res.json(r);
  } catch (error) {
    next(error);
  }
};

exports.deletePublication = (req, res, next) => {};
exports.updatePublication = (req, res, next) => {};
