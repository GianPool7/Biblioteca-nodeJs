import express from 'express'
import { getAllUsuarios,createUsuarios,editUsuarios,deleteUsuarios,getIdUsuarios } from '../controller/usuarios.controller';

const router=express.Router();

router.get('/usuarios',getAllUsuarios)
router.post('/usuarios',createUsuarios)
router.put('/usuarios/:id',editUsuarios)
router.delete('/usuarios/:id',deleteUsuarios)
router.get('/usuarios/:id',getIdUsuarios)