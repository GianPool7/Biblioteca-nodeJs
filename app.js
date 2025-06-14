import express from 'express'
import autoresRouter from './src/routes/autores.routes.js'
import librosRouter from './src/routes/libros.routes.js'
import usuariosRouter from './src/routes/usuarios.routes.js'

const app=express();
app.use(express.json());

app.use(autoresRouter)
app.use(librosRouter)
app.use(usuariosRouter)

export default app