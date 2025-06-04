import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

export const Libros=sequelize.define("Libros",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,  // <-- esto es obligatorio
        autoIncrement: true,
        allowNull: false
    },
    titulo:{
        type:DataTypes.STRING
    },
    categoria:{
        type:DataTypes.INTEGER
    },
    anio_publicacion:{
        type:DataTypes.DATE
    },
    id_author:{
        type:DataTypes.INTEGER
    },
    estado:{
        type:DataTypes.STRING
    }
});

// Libros.belongsTo(Autores, {
//   foreignKey: 'id_author' // debe coincidir con la línea de arriba
// });
