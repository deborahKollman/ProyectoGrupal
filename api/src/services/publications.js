// const { publications } = require('../database/data.js');
const { Publication, Service, User, Category } = require('../database/postgres.js');
const { Op } = require('sequelize');

exports.getPublications = async (offset, limit, title, cat_id = '0') => {
  // Retorna las limit publicaciones activas a partir de la nro offset
  if (title === '' && cat_id === '0') {
    activePub = Publication.findAll({
      where: {
        state: 'Active'
      },
      include: {
        model: Service
      }
    });
    return activePub;
  }

  if (title !== '') {
    activePub = Publication.findAll({
      where: {
        state: 'Active',
        title: {
          [Op.iLike]: `%${title}%`
        }
      },
      include: {
        model: Service
      }
    });
    return activePub;
  }

  if (Number(cat_id) !== 0) {
    activePub = Publication.findAll({
      where: {
        state: 'Active',
        categoryId: Number(cat_id)
      },
      include: {
        model: Service
      }
    });
    return activePub;
  }
};

exports.getPublicationDetails = (id) => {
  // Retorna detalle de la publicacion
  const pubDetail = Publication.findOne({
    where: { id },
    include: {
      model: Service
    }
  });
  return pubDetail;
};

exports.postPublication = async (
  title,
  detail,
  detail_resume,
  price,
  album,
  categoryId,
  usr_id = 1,
  services
) => {
  const user = await User.findOne({ where: { id: usr_id } });
  if(user){
    const category = await Category.findOne({ where: {id:categoryId}});
    if(category){
      var serv=[];
      if(Array.isArray(services)){
        for(let i=0;i<services.length;i++){
          var servM = await Service.findOne({where:{id:services[i]}})
          if(!servM){return {err_msg:'Service not found'}}
          serv.push(servM)
        }
      }else{
        if(services){
          services = services.split(',')
          for(let i=0;i<services.length;i++){
            var servM = await Service.findOne({where:{id:services[i]}})
            if(!servM){return {err_msg:'Service not found'}}
            serv.push(servM)
          }
        }
      }
      const publication = await Publication.create({
        date: Date.now(),
        state: 'Active',
        title,
        detail,
        detail_resume,
        price,
        album
      });
      publication.setUser(user);
      publication.setCategory(category);
      publication.setServices(serv);
      return publication;
    }
    return {err_msg:'Category not found'}
  }
  return {err_msg:'User not found'}
};

exports.getPublicationsByTitle = (title) => {
  const publication = Publication.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`
      }
    }
  });
  return publication;
};

exports.updatePublication = (id, publicationChanges) => {
  const publicationUpdate = Publication.update(publicationChanges, {
    where: { id }
  });
  return publicationUpdate;
};

exports.deletePublication = (id) => {
/*   const publicationDelete = Publication.destroy({
    where: { id }
  }); */
  const publicationDelete = Publication.update (
    {
      state: 'Inactive',
    },
    {
      where: {
        id: id,
      }
    }
  )
  return publicationDelete;
};

exports.getPublicationsByCategory = (cat_id) => {
  const publications = Publication.findAll({
    where: {
      categoryId: cat_id
    }
  });
  return publications;
};

exports.getPublicationsByUserId = async (id) => {
  const user = await User.findOne({
    where: {id}
  })
  if(user){
    const publications = await Publication.findAll({
      where: {userId: id}
    })

    return publications
  }
  return {err_message: 'User not found'}
}