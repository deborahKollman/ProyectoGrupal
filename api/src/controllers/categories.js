const { getCategories , getCategorieById, postCategory} = require('../services/categories.js');

exports.getCategories = async (req, res, next) => {
  try {
    const r = await getCategories();
    res.json(r);
  } catch (error) {
    next(error);
  }
};

 exports.getCategorieById =async (req, res, next) => {
  try {
    const r = await getCategorieById(req.params.id);
    res.json(r);
  } catch (error) {
    next(error);
  }
};

exports.postCategory=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de services
    const r = await postCategory(req.body.name,req.body.services);
    res.json(r);
  } catch (error) {
    next(error);
  }
};
  
exports.deleteCategory = async (req, res, next) => {};
exports.updateCategory = async (req, res, next) => {};
