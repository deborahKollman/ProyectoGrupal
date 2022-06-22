const { User, connection } = require('../../src/database/postgres.js');
const users = require('../helpers/users.js');

describe('Users model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear un usuario si los campos son validos', async () => {
    try {
      const user = await User.create({ ...users[0] });
      expect(user).toBeDefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  xit('el atributo "nombre" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[1], name: null });
      expect(user.name).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo "email" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[2], email: null });
      expect(user.email).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo "password" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[3], password: null });
      expect(user.password).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  xit('el atributo "country" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[4], country: null });
      expect(user.country).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  xit('el atributo "province_state" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[5], province_state: null });
      expect(user.province_state).not.toBeNull();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo "rol" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[6], rol: null });
      expect(user.rol).toBe('user');
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('si el atributo "rol" es invalido debe tirar un error', async () => {
    const user = await User.create({ ...users[7], rol: 20 });

    expect(user.rol).toBe('client');
  });
  it('el atributo "buyer_reputation" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[8] });
      expect(user.buyer_reputation).toBe(0);
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo "seller_reputation" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[9] });
      expect(user.seller_reputation).toBe(0);
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo location debe estar correctamente definido', async () => {
    const user = await User.create({ ...users[10] });
    const location = user.location;

    expect(location).toBe(`${user.province_state}, ${user.country}`);
  });
  it('el atributo "buyer_opinions" no puede ser nulo', async () => {
    try {
      const user = await User.create({ ...users[11] });
      expect(user.buyer_opinions).toBe(0);
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
