import express from 'express'
import autoresRouter from './src/routes/autores.routes.js'
import librosRouter from './src/routes/libros.routes.js'

const app=express();
app.use(express.json());

app.use(autoresRouter)
app.use(librosRouter)

export default app