const { Seller, User, connection } = require('../../src/database/postgres');
const users = require('../helpers/users');

describe('Seller model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear un usuario con el rol de "seller"', async () => {
    const user = await User.create(users[1]);

    expect(user.rol).toBe('seller');
  });
  it('deberia asignar correctamente el rol a la tabla "seller"', async () => {
    const user = await User.create(users[4]);
    const seller = await Seller.create({ userId: user.id });

    expect(seller.userId).toBe(user.id);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
