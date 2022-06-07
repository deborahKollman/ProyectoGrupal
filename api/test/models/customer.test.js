const {
  User,
  Customer,
  connection
} = require('../../src/database/postgres.js');
const users = require('../helpers/users.js');

describe('Customer model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });

  it('deberia crear un usuario con el rol de "customer"', async () => {
    const user = await User.create(users[1]);

    expect(user.rol).toBe('client');
  });
  it('deberia asignar correctamente el rol a la tabla "customer"', async () => {
    const user = await User.create(users[4]);
    const customer = await Customer.create({ userId: user.id });

    expect(customer.userId).toBe(user.id);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
