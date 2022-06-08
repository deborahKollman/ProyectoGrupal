const { Admin, User, connection } = require('../../src/database/postgres');
const users = require('../helpers/users');
const admins = users.filter((user) => user.rol === 'admin');

describe('Admin model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear un usuario con el rol "admin" si los campos son validos', async () => {
    const user = await User.create({ ...admins[0] });

    expect(user.rol).toBe('admin');
  });
  it('deberia asignar correctamente el "userId" al nuevo "admin"', async () => {
    for (let i = 1; i < admins.length; i++) {
      const user = await User.create({ ...admins[i] });
      await Admin.create({ userId: user.id });
    }
    const Admins = await Admin.findAll();
    expect(Admins.length).toBe(admins.length - 1);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
