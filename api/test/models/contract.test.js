const {
  User,
  Publication,
  Service,
  Category,
  Contract,
  connection
} = require('../../src/database/postgres');

const users = require('../helpers/users');
const publications = require('../helpers/publications');
const services = require('../helpers/services');
const categories = require('../helpers/categories');

describe('Publication model', () => {
  let user;
  beforeAll(async () => {
    await connection.sync({ force: true });
    user = await User.create({ ...users[0] });
  });
  it('deberia realizar un contrato por cada publicacion', async () => {
    const category = await Category.create(categories[0]);
    const service = await Service.create({
      ...services[0],
      categoryId: category.id
    });

    for (let i = 0; i < publications.length; i++) {
      const publicacion = await Publication.create(publications[i]);
      await publicacion.setUser(user);
      await service.addPublication(publicacion);
      await Contract.create({
        userId: user.id,
        publicationId: publicacion.id
      });
    }

    const contracts = await user.getContracts();
    expect(contracts.length).toBe(publications.length);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
