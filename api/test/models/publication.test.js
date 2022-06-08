const {
  Publication,
  User,
  Service,
  Category,
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
  it('deberia crear una publicacion si los campos son validos', async () => {
    const category = await Category.create(categories[0]);
    const service = await Service.create({
      ...services[0],
      categoryId: category.id
    });
    const publication = await Publication.create({ ...publications[0] });
    await publication.setUser(user);
    await service.addPublication(publication);

    expect(publication).toBeDefined();
  });
  it('el atributo "date" no puede ser nulo', async () => {
    try {
      const publication = await Publication.create({
        ...publications[1],
        date: null
      });
      await publication.setUser(user);
      expect(publication.date).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo "state" no puede ser nulo', async () => {
    try {
      const publication = await Publication.create({
        ...publications[2],
        state: null
      });
      await publication.setUser(user);
      expect(publication.state).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo "serviceId" no puede ser nulo', async () => {
    try {
      const publication = await Publication.create({
        ...publications[3],
        serviceId: null
      });
      await publication.setUser(user);
      expect(publication.serviceId).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo "detail" no puede ser nulo', async () => {
    try {
      const publication = await Publication.create({
        ...publications[4],
        detail: null
      });
      await publication.setUser(user);
      expect(publication.detail).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo "price" no puede ser nulo', async () => {
    try {
      const publication = await Publication.create({
        ...publications[5],
        price: null
      });
      await publication.setUser(user);
      expect(publication.price).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('deberia crear una publicacion con su respectiva categoria y serviceId', async () => {
    const category = await Category.create(categories[0]);
    const service = await Service.create({
      ...services[0],
      categoryId: category.id
    });
    for (let i = 0; i < publications.length; i++) {
      const publication = await Publication.create(publications[i]);
      await publication.setUser(user);
      await service.addPublication(publication);
    }
    const Publications = await Publication.findAll();
    for (let i = 0; i < Publications.length; i++) {
      expect(Publications[i].userId).toBe(1);
    }
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
