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
        type: DataTypes.STRING,
        allowNull:false
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      last_name:{
        type:DataTypes.STRING,
        defaultValue:""
      },
      avatar_image:{
        type:DataTypes.STRING,
        defaultValue:""
      },
      description:{
        type:DataTypes.TEXT,
        defaultValue:""
      },
      phone_number:{
        type:DataTypes.STRING,
        defaultValue:""
      },
      country: {
        type: DataTypes.STRING,
        defaultValue:""
      },
      province_state: {
        type: DataTypes.STRING,
        defaultValue:""
      },
      location: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.province_state}, ${this.country}`;
        }
      },
      rol: {
        type: DataTypes.ENUM('admin', 'client'),
        defaultValue: 'client'
      },
      buyer_reputation: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: true
        }
      },
      buyer_opinions: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: []
      },
      seller_reputation: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: true
        }
      },
      seller_opinions: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: []
      }
    },
    {
      timestamps: false
    }
  );
};
