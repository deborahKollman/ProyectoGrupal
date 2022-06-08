const {
  User,
  Publication,
  Service,
  Category,
  Favorite,
  connection
} = require('../../src/database/postgres.js');
const users = require('../helpers/users.js');
const publications = require('../helpers/publications.js');
const services = require('../helpers/services.js');
const categories = require('../helpers/categories.js');

xdescribe('Publication model', () => {
  let user;
  beforeAll(async () => {
    await connection.sync({ force: true });
    user = await User.create({ ...users[0] });
  });
  it('deberia añadir a sus favoritos cada publicacion', async () => {
    const category = await Category.create(categories[0]);
    const service = await Service.create({
      ...services[0],
      categoryId: category.id
    });

    for (let i = 0; i < publications.length; i++) {
      const publicacion = await Publication.create(publications[i]);
      await publicacion.setUser(user);
      await service.addPublication(publicacion);
      const favorite = await Favorite.create({
        userId: user.id
      });
      await publicacion.addFavorite(favorite);
    }

    const favorites = await user.getFavorites();
    expect(favorites.length).toBe(publications.length);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
