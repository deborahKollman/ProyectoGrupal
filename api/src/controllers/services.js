const {getServices, getServiceById, postService ,deleteService, updateService} = require('../services/services.js');

exports.getServices = async (req, res, next) => {
  try {
    const r = await getServices();
    res.status(200).json(r);
  } catch (error) {
    next(error);
  }
};

exports.getServiceById =async (req, res, next) => {
  try {
    const r = await getServiceById(req.params.id);
    res.status(200).json(r);
  } catch (error) {
    next(error);
  }
};

exports.postService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await postService(req.body.name,req.body.categories);
    res.status(201).json(r);
  } catch (error) {
    next(error);
  }
}

exports.updateService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await updateService(req.query.id,req.body.name);
    res.status(200).json(r);
  } catch (error) {
    next(error);
  }
}

exports.deleteService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await deleteService(req.query.id);
    res.status(200);
  } catch (error) {
    next(error);
  }
}
