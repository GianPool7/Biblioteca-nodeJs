import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js'; // asegúrate de que este exporte la instancia como "sequelize"

export const Autores = sequelize.define('Autores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  name: {
    type: DataTypes.STRING,
  },
  pais: {
    type: DataTypes.STRING,
  },
});

// Autores.hasMany(Libros,{
//   foreignKey:'id_author'
// })
