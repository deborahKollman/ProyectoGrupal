const request = require('supertest');
const server = require('../../server');
const { User, Op, connection } = require('../../src/database/postgres');
const { OK, CREATED } = require('../../src/routes/helpers/status');

describe('GET /users', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia retornar la plantilla de datos', async () => {
    const response = await request(server).get(
      '/users?page=1&offset=10&limit=10'
    );
    expect(response.status).toBe(OK);
    expect(response.body).toEqual({
      count: 0,
      page: 1,
      next: null,
      previous: null,
      users: []
    });
  });
  it('deberia retornar un usuario si es que existe', async () => {
    await User.create({
      email: 'JuanEmail@gmail.com',
      password: '123456',
      name: 'Juan',
      country: 'Colombia',
      province_state: 'Antioquia',
      role: 'admin'
    });
    const response = await request(server)
      .get('/users?page=1&offset=10&limit=10')
      .send();
    expect(response.body.users.length).toEqual(1);
    expect(response.status).toBe(OK);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
  });
});

describe('GET /users:id', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia retornar un usuario si es que existe', async () => {
    await User.create({
      email: 'carlos65357@gmail.com',
      password: '123456',
      name: 'Carlos',
      country: 'Colombia',
      province_state: 'Antioquia',
      role: 'admin'
    });
    const response = await request(server).get('/users/1');
    const user = await User.findByPk(1);
    expect(response.body.user).toEqual(user.toJSON());
    expect(response.status).toBe(OK);
  });
});

describe('POST /users', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('Debe retornar el usuario si se crea el usuario', async () => {
    const response = await request(server).post('/users').send({
      email: 'carlos65357@gmail.com',
      password: '123456',
      name: 'Carlos',
      country: 'Bolivia',
      province_state: 'La Paz - El Alto',
      rol: 'client'
    });
    const [user] = await User.findAll({
      where: {
        email: {
          [Op.eq]: 'carlos65357@gmail.com'
        }
      }
    });

    expect(response.body.created).toEqual(user.toJSON());
    expect(response.status).toBe(CREATED);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
