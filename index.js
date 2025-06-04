import app from './app.js'
import Sequelize from './src/database/db.js'
// const app=express ();
// import './src/models/libros.js'

async function start(){

    try {
        await Sequelize.sync({force:false});
        // console.log('Connection has been established successfully.');
        app.listen(3000)
        // console.log("El sistema esta corriendo en el puerto 3000");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

start();


