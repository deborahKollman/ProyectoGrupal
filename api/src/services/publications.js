// const { publications } = require('../database/data.js');
const { Publication, Service, User } = require('../database/postgres.js');
const { Op } = require('sequelize');

exports.getPublications = (offset, limit, title, cat_id = '0') => {
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
  state,
  title,
  detail,
  detail_resume,
  price,
  album,
  categoryId,
  usr_id = 1
) => {
  try {
    const user = await User.findOne({ where: { id: usr_id } });
    console.log(
      title,
      detail,
      detail_resume,
      price,
      album,
      categoryId,
      (usr_id = 1)
    );
    const publication = await Publication.create({
      date: Date.now(),
      state: 'Active',
      title,
      detail,
      detail_resume,
      price,
      album,
      categoryId
    });
    publication.setUser(user);

    return publication;
  } catch (error) {
    return { err_msg: 'Publication post error' };
  }
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
