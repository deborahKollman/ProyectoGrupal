const { Category, connection } = require('../../src/database/postgres.js');
const categories = require('../helpers/categories.js');

xdescribe('Categories model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('deberia crear una categoria si los campos son validos', async () => {
    const category = await Category.create({ ...categories[0] });
    expect(category).toBeDefined();
  });
  it('el atributo "name" no puede ser nulo', async () => {
    try {
      const category = await Category.create({ ...categories[1], name: null });
      if (!category.name) {
        throw new Error('El nombre no puede ser nulo');
      }
    } catch ({ name }) {
      expect(name).toBe('SequelizeValidationError');
    }
  });
  it('el atributo name debe ser unico', async () => {
    try {
      await Category.create({ ...categories[0] });
      await Category.create({ ...categories[0] });
      throw new Error('El nombre debe ser unico');
    } catch ({ name }) {
      expect(name).toBe('SequelizeUniqueConstraintError');
    }
  });
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  });
});
