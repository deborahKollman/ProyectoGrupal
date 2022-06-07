const { categories } = require('../database/data.js');

exports.getCategories = () => {
  // Retorna un arreglo de servicios, y por cada uno, en forma anidada, los servicios
  return categories;
};
