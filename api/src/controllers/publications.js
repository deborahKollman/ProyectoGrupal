const {
  getPublications,
  getPublicationDetails,
  postPublication
} = require('../services/publications.js');

exports.getPublications = async (req, res, next) => {
  // Recibe offset y nros de registros a devolver x body
  // Recibe title por query
  try {
    const { offset = 0, limit = 0 } = req.body;
    const { title = '' } = req.query;
    const { cat_id} = req.query;
    const r = await getPublications(offset, limit, title, cat_id);
    res.json(r);
  } catch (error) {
    next(error);
  }
};

exports.getPublicationDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const r = await getPublicationDetails(id);
    res.send(r);
  } catch (error) {
    next(error);
  }
};

exports.postPublication = async (req, res, next) => {
/*   req.files = [
    {
      fieldname: 'pictures',
      originalname: 'Proyecto Final.pdf',
      encoding: '7bit',
      mimetype: 'application/pdf',
      destination: './public/img/10',
      filename: 'pictures-1654731917346.pdf',
      path: 'public\\img\\10pictures-1654731917346.pdf',
      size: 393334
    }
  ]; */
  try {
    const {
      title = '',
      detail = '',
      detail_resume = '',
      price = 0,
      usr_id,
      categoryId
    } = req.body;
    const album = req.files.map(
      (e) =>
        'http://' +
        process.env.HOST +
        ':' +
        process.env.PORT +
        e.destination.slice(1) +
        '/' +
        e.filename
    );
    const r = await postPublication(
      title,
      detail,
      detail_resume,
      price,
      album,
      categoryId,
      usr_id
    );
    res.status(200).send(r);
  } catch (error) {
    next(error);
  }
};

exports.deletePublication = (req, res, next) => {};
exports.updatePublication = (req, res, next) => {};
