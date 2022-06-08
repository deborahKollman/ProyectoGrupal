const { categories } = require('../database/data.js');
const {Category, Service}=require('../database/postgres.js')

exports.getServices=async()=>{
    const services=await Service.findAll({
    attributes: [
      ['id', 'ser_id'],
      ['name', 'ser_name']
    ],
    include:{
      model:Category,
      attributes:[['id','cat_id'],['name','cat_name']]}
    })

    return services;
}

exports.getServiceById=async(id)=>{
    const service=await Service.findOne({
        where:{id:id},
        attributes: [
          ['id', 'ser_id'],
          ['name', 'ser_name']
        ],
        include:{
          model:Category,
          attributes:[['id','cat_id'],['name','cat_name']]}
    })
    
    return service;
};

exports.postService=async(name,categories=[])=>{
    const service=await Service.create({name:name});
    service.setCategories(categories)

    return service
}
