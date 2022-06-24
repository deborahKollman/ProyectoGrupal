const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'chat',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_sender: {
        type: DataTypes.INTEGER
      },
      id_receiver: {
        type: DataTypes.INTEGER
      },
      date_comment: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      comment: {
        type: DataTypes.TEXT
      }
    },
    {
      timestamps: false
    }
  );
};
