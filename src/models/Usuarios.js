import { DataTypes } from "sequelize";
import Sequelize from "../database/db.js";

Sequelize.define('Usuarios',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    }
})