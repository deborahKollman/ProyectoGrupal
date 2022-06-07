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
      album_id: {
        type: DataTypes.INTEGER
      },
      detail: {
        type: DataTypes.TEXT
      }
    },
    {
      timestamps: false
    }
  );
};
