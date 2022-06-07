const { getCategories } = require('../services/categories.js');

exports.getCategories = (req, res, next) => {
  try {
    const r = getCategories();
    res.json(r);
  } catch (error) {
    next(error);
  }
};
