require('dotenv').config();
const fs = require('fs');
const path = require('path');

const { Sequelize, Op } = require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = process.env.NODE_ENV?
new Sequelize({
  database: DB_NAME,
  dialect: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  pool: {
    max: 3,
    min: 1,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  ssl: true,
})
:new Sequelize(
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
const { Chat, Category, Service, User, Contract, Favorite, Publication, Payment, Budget } =
  sequelize.models;
Category.belongsToMany(Service, { through: 'CategoryServices' });
Service.belongsToMany(Category, { through: 'CategoryServices' });

User.hasMany(Publication);
Publication.belongsTo(User);
Service.belongsToMany(Publication, {
  through: 'PublicationServices'
});
Publication.belongsToMany(Service, {
  through: 'PublicationServices'
});
Category.hasMany(Publication);
Publication.belongsTo(Category);

User.hasMany(Contract);
Contract.belongsTo(User);
Publication.hasMany(Contract);
Contract.belongsTo(Publication);

User.hasOne(Favorite);
Favorite.belongsTo(User);
Favorite.belongsToMany(Publication, { through: 'FavoritePublications' });
Publication.belongsToMany(Favorite, { through: 'FavoritePublications' });

Contract.hasOne(Payment);
Payment.belongsTo(Contract);

Budget.hasOne(Contract);
Contract.belongsTo(Budget);

Publication.hasMany(Budget);
Budget.belongsTo(Publication);

Budget.hasMany(Chat);
Chat.belongsTo(Budget);



module.exports = {
  ...sequelize.models,
  connection: sequelize,
  Op
};
