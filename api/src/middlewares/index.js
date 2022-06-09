const fs = require("fs");
const mimeTypes = require('mime-types')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { id } = req.body;
    const ruta = `./public/img/${id}`
    if (!fs.existsSync(ruta)) {
      fs.mkdirSync(ruta)
    }    
    cb(null, ruta)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + mimeTypes.extension(file.mimetype));
  }
})

exports.upload = multer({ storage: storage })

