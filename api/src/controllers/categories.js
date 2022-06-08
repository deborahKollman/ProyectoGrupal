const { getCategories , getCategorieById, postCategory, deleteCategory, updateCategory} = require('../services/categories.js');

exports.getCategories = async (req, res, next) => {
  try {
    const r = await getCategories();
    res.status(200).json(r);
  } catch (error) {
    next(error);
  }
};

 exports.getCategorieById =async (req, res, next) => {
  try {
    const r = await getCategorieById(req.params.id);
    res.status(200).json(r);
  } catch (error) {
    next(error);
  }
};

exports.postCategory=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de services
    const r = await postCategory(req.body.name,req.body.services);
    res.status(201).json(r);
  } catch (error) {
    next(error);
  }
};
  
exports.deleteCategory = async (req, res, next) => {
  try {
    //req.body.categories: array de ids de services
    const r = await deleteCategory(req.query.id);
    res.status(200);
  } catch (error) {
    next(error);
  }
};
exports.updateCategory = async (req, res, next) => {
  try {
    //req.body.categories: array de ids de services
    const r = await updateCategory(req.query.id,req.body.name);
    res.status(200).json(r);
  } catch (error) {
    next(error);
  }
};
