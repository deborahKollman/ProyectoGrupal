// const { categories } = require('../database/data.js');
const { Category, Service } = require('../database/postgres.js');

exports.getCategories = async () => {
  // Retorna un arreglo de servicios, y por cada uno, en forma anidada, los servicios
//Esto son algunos datos agregados
  // const plom=await Category.create({ name: 'Plomeria' });
  // const gas = await Category.create({ name: 'Electricidad' });
  // const ases= await Service.create({name:'Asesoramiento'});
  // const inst = await Service.create({ name: 'Instalaciones' });
  // const dest = await Service.create({name:'Destape cañerías'});
  // const tab=await Service.create({name:'Tableros eléctricos'});
  // const tri=await Service.create({name:'Trifásica'})
  // await plom.addServices([ases,inst,dest]);
  // await gas.addServices([tab,inst,tri,ases]);

  const categories = await Category.findAll({
     attributes: [
      ['id', 'cat_id'],
      ['name', 'cat_name']
    ],
    include:{
      model:Service,
      attributes:[['id','ser_id'],['name','ser_name']]}
  });
  


  return categories;
};

exports.getCategorieById=async(id)=>{
  const category= await Category.findOne({
    where:{id:id},
    attributes: [
      ['id', 'cat_id'],
      ['name', 'cat_name']
    ],
    include:{
      model:Service,
      attributes:[['id','ser_id'],['name','ser_name']]}
  })

  return category
};

exports.postCategory=async(name,services=[])=>{
  const category=await Category.create({name:name});
  category.setServices(services)

  return category;
}

exports.deleteCategory = async (id) => {
  // Elimina una categoria
  const category = await Category.findByPk(id);
  await category.destroy();
  return category;
};

exports.updateCategory = async (id, name) => {
  // Actualiza una categoria
  const category = await Category.findByPk(id);
  await category.update({ name });
  return category;
}