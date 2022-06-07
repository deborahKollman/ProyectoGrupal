const { publications } = require('../database/data.js');

exports.getPublications = (offset, limit) => {
  // Retorna las limit publicaciones activas a partir de la nro offset
  
  return publications;
};
