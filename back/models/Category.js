const { Sequelize, Model } = require("sequelize")
const db = require("../config");


class Category extends Model { }
Category.init({
    nombre:{
            type: Sequelize.STRING
    },
    
    },{sequelize: db, modelName:"category"});
    
module.exports = Category