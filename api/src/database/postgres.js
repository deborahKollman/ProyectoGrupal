require('dotenv').config();
const fs = require('fs');
const path = require('path');

const { Sequelize } = require('sequelize');
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
const {
  Category,
  Service,
  User,
  Admin,
  Customer,
  Seller,
  Contract,
  Favorite,
  Publication
} = sequelize.models;
Category.hasMany(Service);
Service.belongsTo(Category);

User.hasOne(Admin);
Admin.belongsTo(User);
User.hasOne(Customer);
Customer.belongsTo(User);
Customer.hasOne(Seller);
Seller.belongsTo(User);

Seller.hasMany(Publication);
Publication.belongsTo(Seller);

Customer.hasMany(Contract);
Contract.belongsTo(Customer);

Favorite.hasMany(Publication);
Publication.belongsTo(Favorite);
Favorite.hasMany(Customer);
Customer.belongsTo(Favorite);

module.exports = {
  ...sequelize.models,
  connection: sequelize
};
