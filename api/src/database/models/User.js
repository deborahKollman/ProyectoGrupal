const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      province_state: {
        type: DataTypes.STRING
      },
      location: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.province_state}, ${this.country}`;
        }
      },
      seller_reputation: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: true
        }
      },
      buyer_reputation: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: true
        }
      },
      rol: {
        type: DataTypes.ENUM('admin', 'client', 'guest'),
        defaultValue: 'guest'
      }
    },
    {
      timestamps: false
    }
  );
};
