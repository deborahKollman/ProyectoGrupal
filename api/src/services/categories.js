// const { categories } = require('../database/data.js');
const { Category, Service } = require('../database/postgres.js');

exports.getCategories = async () => {
  // Retorna un arreglo de servicios, y por cada uno, en forma anidada, los servicios
  // Esto son algunos datos agregados
  await Category.create({ name: 'Plomeria' });
  const gas = await Category.create({ name: 'Gas' });
  const serv = await Service.create({ name: 'Servicio1' });
  gas.addService(serv);

  const categories = await Category.findAll({
    attributes: [
      ['id', 'cat_id'],
      ['name', 'cat_name']
    ],
    raw: true
  });
  for (let i = 0; i < categories.length; i++) {
    categories[i].cat_ser = await Service.findAll({
      attributes: [
        ['id', 'ser_id'],
        ['name', 'ser_name']
      ],
      where: { categoryId: categories[i].cat_id },
      raw: true
    });
  }

  return categories;
};

exports.postCategory = async () => {
  // Crea una categoria
  const category = await Category.create({ name: 'Plomeria' });
  return category;
};

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
};
