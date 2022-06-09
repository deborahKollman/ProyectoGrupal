require('dotenv').config();
const fs = require('fs');
const path = require('path');

const { Sequelize, Op } = require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
);

fs.readdirSync(path.join(__dirname, '/models'))
  .map((model) => require(`./models/${model.replace('.js', '')}`))
  .forEach((model) => model(sequelize));

sequelize.models = Object.entries(sequelize.models).reduce(
  (acc, [key, value]) => {
    acc[key[0].toUpperCase() + key.slice(1)] = value;
    return acc;
  },
  {}
);
// Relaciones de DB
const { Category, Service, User, Admin, Contract, Favorite, Publication } =
  sequelize.models;
Category.belongsToMany(Service, { through: 'CategoryServices' });
Service.belongsToMany(Category, { through: 'CategoryServices' });

User.hasOne(Admin);
Admin.belongsTo(User);

User.hasMany(Publication);
Publication.belongsTo(User);
Service.belongsToMany(Publication, {
  through: 'PublicationServices'
});
Publication.belongsToMany(Service, {
  through: 'PublicationServices'
});

User.hasMany(Contract);
Contract.belongsTo(User);
Publication.hasMany(Contract);
Contract.belongsTo(Publication);

User.hasMany(Favorite);
Favorite.belongsTo(User);
Favorite.belongsToMany(Publication, { through: 'FavoritePublications' });
Publication.belongsToMany(Favorite, { through: 'FavoritePublications' });

module.exports = {
  ...sequelize.models,
  connection: sequelize,
  Op
};
