import express from 'express'
import { getAllAutor,setAutor,updateAutor,deleteAutor,getAutor } from '../controller/autores.controller.js'

const router=express.Router()


router.get('/autor',getAllAutor)
router.post('/autor',setAutor)
router.patch('/autor/:id',updateAutor)
router.delete('/autor/:id',deleteAutor)
router.get('/autor/:id',getAutor)

export default router;