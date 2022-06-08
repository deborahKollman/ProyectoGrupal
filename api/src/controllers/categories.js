const { getCategories } = require('../services/categories.js');

exports.getCategories = async (req, res, next) => {
  try {
    const r = await getCategories();
    res.json(r);
  } catch (error) {
    next(error);
  }
};

exports.postCategory = async (req, res, next) => {};
exports.deleteCategory = async (req, res, next) => {};
exports.updateCategory = async (req, res, next) => {};
