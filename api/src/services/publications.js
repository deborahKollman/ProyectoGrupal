const { publications } = require('../database/data.js');

exports.getPublications = () => {
  // Retorna las n publicaciones activas
  return publications;
};
