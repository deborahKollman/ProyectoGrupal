const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'budget',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_request: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_seller: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date_request: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      comment_request: {
        type: DataTypes.TEXT
      },
      picture_request: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
      },
      priority: {
        type: DataTypes.ENUM('normal', 'urgent'),
        defaultValue: 'normal'
      },
      date_budget: {
        type: DataTypes.DATE
      },
      comment_budget: {
        type: DataTypes.TEXT
      },
      picture_budget: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      state: {
        type: DataTypes.ENUM('pending', 'acepted', 'rejected'),
        defaultValue: 'pending'
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
