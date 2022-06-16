const { getCategories , getCategorieById, postCategory, deleteCategory, updateCategory} = require('../services/categories.js');
const {BAD_REQUEST, CREATED, OK} =require('../routes/helpers/status.js')

exports.getCategories = async (req, res, next) => {
  try {
    const r = await getCategories();
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};

 exports.getCategorieById =async (req, res, next) => {
  try {
    const r = await getCategorieById(req.params.id);
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};

exports.postCategory=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de services
    const r = await postCategory(req.body.name,req.body.services);
    
    res.status(CREATED).send(r.message);
  } catch (error) {
    next(error);
  }
};
  
exports.deleteCategory = async (req, res, next) => {
  try {
    //req.body.categories: array de ids de services
    const r = await deleteCategory(req.params.id);
    if(r.err_message){
      res.status(BAD_REQUEST).send(r.err_message)
    }
    else{
      res.status(OK).send(r.message);
    }
    
  } catch (error) {
    next(error);
  }
};
exports.updateCategory = async (req, res, next) => {
  try {
    //req.body.categories: array de ids de services
    const r = await updateCategory(req.params.id,req.body.name);
    if(r.err_message){
      res.status(BAD_REQUEST).send(r.err_message)
    }
    else{
      res.status(OK).send(r.message);

    }
  } catch (error) {
    next(error);
  }
};
