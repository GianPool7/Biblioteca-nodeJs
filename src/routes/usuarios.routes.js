import express from 'express'
import { getAllUsuarios,createUsuarios,editUsuarios,deleteUsuarios,getIdUsuarios } from '../controller/usuarios.controller.js';

const router=express.Router();

router.get('/usuarios',getAllUsuarios)
router.post('/usuarios',createUsuarios)
router.patch('/usuarios/:id',editUsuarios)
router.delete('/usuarios/:id',deleteUsuarios)
router.get('/usuarios/:id',getIdUsuarios)

export default router;