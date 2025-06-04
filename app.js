import express from 'express'
import autoresRouter from './src/routes/autores.routes.js'

const app=express();
app.use(express.json());

app.use(autoresRouter)

export default app