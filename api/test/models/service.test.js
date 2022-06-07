const { Service, connection } = require('../../src/database/postgres.js');
const services = require('../helpers/services.js');

xdescribe('Service model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear un servicio si los campos son validos', async () => {
    const service = await Service.create(services[0]);
    expect(service).toBeDefined();
  });
  it('no deberia crear un servicio si "name" es nulo o esta vacio', async () => {
    try {
      const service = await Service.create({ ...services[1], name: null });
      expect(service).toBeUndefined();
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
