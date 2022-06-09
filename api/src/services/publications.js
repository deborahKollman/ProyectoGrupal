//const { publications } = require('../database/data.js');

const { Publication, Service, User } = require('../database/postgres.js');

exports.getPublications = (offset, limit) => {
  // Retorna las limit publicaciones activas a partir de la nro offset
    activePub = Publication.findAll({
      where: {state:'Active'},
      include: {
        model:Service
        
      }
    });
    return activePub;
};


exports.getPublicationDetails = (id) => {
  // Retorna detalle de la publicacion
    const pubDetail = Publication.findOne({
      where: {id:id},
      include: {
        model:Service
        
      }
    });
    return pubDetail;
};

exports.postPublication = async (title, detail, detail_resume, price, album, categoryId, usr_id=1 ) => {
  try {
    const user= await User.findOne({where: {id:usr_id}})
    console.log(title, detail, detail_resume, price, album, categoryId, usr_id=1)
    const publication= await Publication.create({date: Date.now(), state: 'Active', title, detail, detail_resume, price, album, categoryId});
    publication.setUser(user)

    return publication;  
  }
  catch (error)
  {
    return { err_msg: 'Publication post error' }
  }
}

