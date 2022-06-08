const { publications } = require('../database/data.js');
const { multer } = require('multer');

/* const storage = multer.diskStorage({
  destination: '../../public/img',
  filename: function (req,file,cb){
    cb("","imagen.jpg");
  }
});

const upload = multer ({
  storages: storage
})
 */

exports.getPublications = (offset, limit) => {
  // Retorna las limit publicaciones activas a partir de la nro offset

  return publications;
};

exports.postPublication = (req, res, next) => {

  
}
