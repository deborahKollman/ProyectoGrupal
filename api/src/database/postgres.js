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

const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
.filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
.forEach((file) => {
  modelDefiners.push(require(path.join(__dirname, '/models', file)));
});
modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//Relaciones de DB
const { Category, Service, User, Admin, Customer, Seller, Contract, Favorite, Publication} = sequelize.models
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




//Autenticacion
sequelize
  .authenticate()
  .then(() => {
    console.log('Todo bien 😋');
  })
  .catch((error) => {
    console.error('Error: 😥', error);
  });

module.exports = {
  ...sequelize.models,
  connection: sequelize
};
