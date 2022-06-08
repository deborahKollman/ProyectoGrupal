const {getServices, getServiceById, postService } = require('../services/services.js');

exports.getServices = async (req, res, next) => {
  try {
    const r = await getServices();
    res.json(r);
  } catch (error) {
    next(error);
  }
};

exports.getServiceById =async (req, res, next) => {
  try {
    const r = await getServiceById(req.params.id);
    res.json(r);
  } catch (error) {
    next(error);
  }
};

exports.postService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await postService(req.body.name,req.body.categories);
    res.json(r);
  } catch (error) {
    next(error);
  }
}
