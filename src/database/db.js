import { Sequelize } from 'sequelize';

//casa
//const sequelize = new Sequelize('biblioteca', 'postgres', '123', {
//trabajo
const sequelize = new Sequelize('biblioteca', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

});

export default sequelize