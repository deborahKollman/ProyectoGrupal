const {
  Category,
  Service,
  connection
} = require('../../src/database/postgres.js');
const services = require('../helpers/services.js');
const categories = require('../helpers/categories.js');

xdescribe('Service model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear un servicio si los campos son validos', async () => {
    const service = await Service.create({ ...services[0] });
    expect(service).toBeDefined();
  });
  it('el atributo "name" no puede ser nulo', async () => {
    const service = await Service.create({ ...services[1], name: null });
    expect(service.name).not.toBeNull();
  });
  it('el atributo "categoryId" no puede ser nulo', async () => {
    const service = await Service.create({ ...services[2], categoryId: null });
    expect(service.categoryId).not.toBeNull();
  });
  it('deberia crear un servicio con su respectica categoria y categoryId', async () => {
    const category = await Category.create(categories[0]);
    for (let i = 3; i < categories.length; i++) {
      await Service.create({
        ...services[i],
        categoryId: category.id
      });
    }
    const Services = await Service.findAll();
    for (let i = 3; i < Services.length; i++) {
      expect(Services[i].categoryId).toBe(category.id);
    }
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
