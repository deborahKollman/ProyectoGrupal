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
    console.log(pubDetail)
    return pubDetail;
};

exports.postPublication = async (detail, price, album, usr_id=1) => {
  try {
    const user= await User.findOne({where: {id:usr_id}})
    const publication= await Publication.create({date: Date.now(), state: 'Active', detail, price, album});
    publication.setUser(user)
    return publication;  
  }
  catch (error)
  {
    return { err_msg: 'Publication post error' }
  }
}

