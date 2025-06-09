import express from 'express'
import { getAllLibros,createLibros,editLibros,deleteLibros,getLibroId } from '../controller/libros.controller.js'

const router=express.Router()

router.get('/libros',getAllLibros)
router.post('/libros',createLibros)
router.put('/libros/:id',editLibros)
router.delete('/libros/:id',deleteLibros)
router.get('/libros/:id',getLibroId)

export default router;