const { getCategories } = require('../services/categories.js');

exports.getCategories = async (req, res, next) => {
  try {
    const r = await getCategories();
    res.json(r);
  } catch (error) {
    next(error);
  }
};
