const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('admin',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
    },{
        timestamps:false
    })
}