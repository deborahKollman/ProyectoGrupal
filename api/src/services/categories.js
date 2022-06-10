// const { categories } = require('../database/data.js');
const { Category, Service } = require('../database/postgres.js');

exports.getCategories = async () => {
  // Retorna un arreglo de servicios, y por cada uno, en forma anidada, los servicios
//Esto son algunos datos agregados
  
  const categories = await Category.findAll({
    include:{
      model:Service,
      through:{
        attributes:[]
      }
    }
  });
  
  return categories;
};

exports.getCategorieById=async(id)=>{
  const category= await Category.findOne({
    where:{id:id},
    include:{
      model:Service,
      through:{
        attributes:[]
      }
    }
  })

  return category
};

exports.postCategory=async(name,services=[])=>{
  const category=await Category.create({name:name});
  category.setServices(services)

  return {message:'Category added successfully'};
}

exports.deleteCategory = async (id) => {
  // Elimina una categoria
  const category = await Category.findByPk(id)
  if(!category){
    return {err_message:'Category not found'}
  }
  await Category.destroy({where:{id:id}});
  return {message:'Category deleted successfully'}
};

exports.updateCategory = async (id, name) => {
  // Actualiza una categoria
  const category = await Category.findByPk(id);
  if(!category){
    return {err_message:'Category not found'}
  }
  await category.update({ name });
  return {message:'Category updated successfully'};
}

