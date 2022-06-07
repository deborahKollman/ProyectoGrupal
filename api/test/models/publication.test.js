const {
  Publication,
  User,
  Seller,
  connection
} = require('../../src/database/postgres.js');
const users = require('../helpers/users.js');
const publications = require('../helpers/publications.js');
describe('Publication model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear una publicacion con el id respectivo del vendedor', async () => {
    const user = await User.create(users[1]);
    const seller = await Seller.create({ userId: user.id });
    const publication = await Publication.create({
      ...publications[0],
      sellerId: seller.id
    });

    expect(publication.sellerId).toBe(seller.id);
  });
  it('no deberia crear una publicacion sin el id del vendedor', async () => {
    try {
      const publication = await Publication.create(publications[1]);
      expect(publication).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('no deberia crear una publicacion con un id de vendedor invalido', async () => {
    try {
      const publication = await Publication.create({
        ...publications[2],
        sellerId: 'invalid'
      });
      expect(publication).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeDatabaseError');
    }
  });
  it('no deberia crear una publicacion sin "detail"', async () => {
    try {
      const publication = await Publication.create({
        ...publications[2],
        detail: null
      });
      expect(publication).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('no deberia crear una publicacion sin el "state"', async () => {
    try {
      const publication = await Publication.create({
        ...publications[3],
        state: null
      });
      expect(publication).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('no deberia crear una publicacion sin el "album_id"', async () => {
    try {
      const publication = await Publication.create({
        ...publications[4],
        album_id: null
      });
      expect(publication).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
