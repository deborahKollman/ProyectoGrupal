const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'contract',
    { 
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      contract_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      country: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      postal_code: {
        type: DataTypes.INTEGER,
        defaultValue: 0000
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      city: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      address: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      service_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      status: {
        type: DataTypes.ENUM('In progress', 'Completed'),
        defaultValue: 'In progress'
      }
    },
    {
      timestamps: false
    }
  );
};
