const { Admin, User, connection } = require('../../src/database/postgres');
const users = require('../helpers/users');

describe('Admin model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear un usuario con el rol de "admin"', async () => {
    const user = await User.create(users[3]);

    expect(user.rol).toBe('admin');
  });
  it('deberia asignar correctamente el rol a la tabla "admin"', async () => {
    const user = await User.create(users[6]);
    const admin = await Admin.create({ userId: user.id });

    expect(admin.userId).toBe(user.id);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
