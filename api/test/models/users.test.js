const { User, connection } = require('../../src/database/postgres.js');
const users = require('../helpers/users.js');

describe('Users model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear un usuario si los campos son validos', async () => {
    const user = await User.create(users[0]);
    expect(user).toBeDefined();
  });
  it('no deberia crear un usuario si "email" es nulo o esta vacio', async () => {
    try {
      const user = await User.create({ ...users[1], email: null });
      expect(user).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('no deberia crear un usuario si "password" es nulo o esta vacio', async () => {
    try {
      const user = await User.create({ ...users[2], password: null });
      expect(user).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('no deberia crear un usuario si "name" es nulo o esta vacio', async () => {
    try {
      const user = await User.create({ ...users[3], name: null });
      expect(user).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('no deberia crear un usuario si "country" es nulo o esta vacio', async () => {
    try {
      const user = await User.create({ ...users[4], country: null });
      expect(user).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('no deberia crear un usuario si "province_state" es nulo o esta vacio', async () => {
    try {
      await User.create({ ...users[5], province_state: null });
      expect(user).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('deberia crear un usuario si "rol" es nulo o esta vacio', async () => {
    try {
      const user = await User.create({ ...users[6], rol: null });
      expect(user).toBeDefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('si el "rol", no es proporcionado por defecto tendra el rol de "guest"', async () => {
    const user = await User.create(users[8]);
    expect(user.rol).toBe('guest');
  });

  it('deberia crear correctamente un usuario con el atributo "location"', async () => {
    try {
      const user = await User.create(users[9]);
      expect(user.location).toBe(
        `${users[9].province_state}, ${users[9].country}`
      );
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
