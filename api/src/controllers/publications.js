const { getPublications } = require('../services/publications.js');

exports.getPublications = (req, res, next) => {
  try {
    const r = getPublications();
    res.json(r);
  } catch (error) {
    next(error);
  }
};
