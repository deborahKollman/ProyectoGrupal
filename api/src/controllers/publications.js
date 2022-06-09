const { getPublications, postPublication } = require('../services/publications.js');

exports.getPublications = (req, res, next) => {
  // Recibe offset y nros de registros a devolver x body
  try {
    const { offset = 0, limit = 0 } = req.body;
    const r = getPublications(offset, limit);
    res.json(r);

  } catch (error) {
    next(error);
  }
};

exports.postPublication = async (req, res, next) => {
/*   req.files: [
    {
      fieldname: 'pictures',
      originalname: 'Proyecto Final.pdf',
      encoding: '7bit',
      mimetype: 'application/pdf',
      destination: './public/img/10',
      filename: 'pictures-1654731917346.pdf',
      path: 'public\\img\\10\\pictures-1654731917346.pdf',
      size: 393334
    } */
  try {
    const {detail = '', price = 0, usr_id} = req.body;
    const album = req.files.map((e)=> ('http://' + process.env.HOST + ':' + process.env.PORT +
    e.destination.slice(1) + '/' + e.filename));
    const r = await postPublication(detail, price, album, usr_id);
    res.status(200).send(r);
  } catch (error) {
    next(error);
  }
};

exports.deletePublication = (req, res, next) => {};
exports.updatePublication = (req, res, next) => {};
