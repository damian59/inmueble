const { Sequelize, Model } = require("sequelize")
const db = require("../config");

class Propiedades extends Model { }

Propiedades.init({
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    precio: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT,
       
    },
    ubicacion:{
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING,
    },
    disponible: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        // set(){

        // }
    },
    truncateDescripcion:{
        type:Sequelize.VIRTUAL,
        get(){
            return this.descripcion.slice(0, 20) + "..."
        }
    }
   
}, { sequelize:db, modelName: 'propiedades' });

Propiedades.addHook("beforeCreate", function(){
    if(this.disponible == false){
        Propiedades.nombre+= " NO DISPONIBLE"
    }
})
module.exports = Propiedades