//Armar la conexion
const {Sequelize,Models,DataTypes} = require('sequelize')

const sequelize = New Sequelize(
    "postgres://usr:psw@localhost:5432/demo"
)