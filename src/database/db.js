import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('biblioteca', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

});

export default sequelize