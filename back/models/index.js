const sequelize = require('sequelize')
const db = require ('../config/index')

const Propiedades = require ('./Propiedades')
const Category = require ('./Category')
const User = require ('./User')


Category.belongsToMany(Propiedades,{through: "propCategory"})
User.hasMany(Propiedades, {as:"userProp"})

Propiedades.belongsToMany(User,{through: "favoriteUser"})

module.exports={Propiedades, Category, User}