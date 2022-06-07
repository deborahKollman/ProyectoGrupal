const request = require('supertest');
const server = require('../../server');

describe('GET /users', () => {
  it('Debe retornar un usuario', async () => {
    const response = await request(server).get('/users').send();
    const user = {
      name: 'name',
      lastName: 'lastName'
    };

    expect(response.body).toEqual(user);
    expect(response.status).toBe(200);
  });
});

describe('GET /users/:id', () => {
  it('Debe retornar el usario con id 1', async () => {
    const response = await request(server).get('/users/1').send();
    const user = {
      name: 'name',
      lastName: 'lastName',
      ci: '000000000',
      age: 20
    };

    expect(response.body).toEqual(user);
    expect(response.status).toBe(200);
  });
  it('Debe retornar un error junto con un mensaje de error y un status 404 con id 2', async () => {
    const response = await request(server).get('/users/2').send();

    expect(response.body).toEqual({
      message: 'User not found'
    });
    expect(response.status).toBe(404);
  });
});
