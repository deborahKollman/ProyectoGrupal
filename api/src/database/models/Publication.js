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
        type: DataTypes.STRING,
        defaultValue: 'Active'
      },
      title: {
        type: DataTypes.STRING(50)
      },
      album: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      detail: {
        type: DataTypes.TEXT
      },
      detail_resume: {
        type: DataTypes.STRING(50)
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
