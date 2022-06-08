const request = require('supertest');
const server = require('../../server');
const { User, Op, connection } = require('../../src/database/postgres');
const { OK, CREATED } = require('../../src/routes/helpers/status');

xdescribe('GET /users', () => {
  it('Debe retornar un usuario si es que existe', async () => {
    const response = await request(server).get('/users').send();
    expect(response.body.users.length).toEqual(1);
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
