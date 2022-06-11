const fs = require("fs");
const path = require("path");
const { dirname } = require("path")
const mimeTypes = require('mime-types')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    // solo para carga base
    const rutatest = path.join(dirname(require.main.filename), '/public/img/test')
    if (!fs.existsSync(rutatest)) {
      fs.mkdirSync(rutatest,{recursive:true})
    } 
    // fin solo para cargabase

    const ruta = path.join(dirname(require.main.filename), '/public/img/pub')
    
    if (!fs.existsSync(ruta)) {
      fs.mkdirSync(ruta,{recursive:true})
    }    
    cb(null, './public/img/pub')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + mimeTypes.extension(file.mimetype));
  }
})

exports.upload = multer({ storage: storage })

