const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'publication',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      state: {
        type: DataTypes.STRING
      },
      album: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      detail: {
        type: DataTypes.TEXT
      },
      price: {
        type: DataTypes.FLOAT
      }
    },
    {
      timestamps: false
    }
  );
};
