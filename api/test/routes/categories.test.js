const request = require('supertest');
const server = require('../../server');
const { Category, connection } = require('../../src/database/postgres');
const {
  OK,
  CREATED,
  NOT_FOUND,
  CONFLICT
} = require('../../src/routes/helpers/status');

describe('GET /categories', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('Si no hay categorias debe retornar un array vacio', async () => {
    const { status, body } = await request(server).get('/categories');

    expect(status).toBe(OK);
    expect(body).toEqual({
      categories: []
    });
  });
  it('Si hay categorias retornar todas las categorias con el "nombre" y el respecto "id"', async () => {
    await Category.create({ name: 'Plomeria' });
    await Category.create({ name: 'Carpinteria' });
    await Category.create({ name: 'Hogar' });
    const { status, body } = await request(server).get('/categories');

    expect(status).toBe(OK);
    expect(body.categories).toEqual([
      { id: 1, name: 'Plomeria' },
      { id: 2, name: 'Carpinteria' },
      { id: 3, name: 'Hogar' }
    ]);
  });
  afterAll(async () => {
    await connection.sync({ force: true });
  });
});

describe('POST /categories', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('Debe retornar la categoria al crearla', async () => {
    const { status, body } = await request(server).post('/categories').send({
      name: 'Plomeria'
    });
    const category = await Category.findOne({
      where: {
        name: 'Plomeria'
      }
    });
    expect(body).toEqual(category.toJSON());
    expect(status).toBe(CREATED);
  });
  it('Debe retornar un error si es que ya existe esa categoria', async () => {
    const { status, body } = await request(server).post('/categories').send({
      name: 'Plomeria'
    });
    expect(status).toBe(CONFLICT);
    expect(body).toEqual({
      message: 'Category already exist'
    });
  });
  afterAll(async () => {
    await connection.sync({ force: true });
  });
});
