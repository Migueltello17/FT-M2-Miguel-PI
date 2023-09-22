const { DataTypes } = require('sequelize');

//Sequelize es la instancia que recibe 
module.exports = (sequelize) => {
   //A partir de esa instancia definimos al modelo
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER, //Tipo de dato
         allowNull: false, //Constraist
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      }, 
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, 
   { timestamps: false }); // propiedad para eliminar los campos por default create, update
};
