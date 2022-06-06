require('dotenv').config();

const { Sequelize } = require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
);

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
