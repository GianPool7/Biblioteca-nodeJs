import {Usuarios} from  '../models/Usuarios.js'

export const getAllUsuarios=(req,res)=>{
    res.send('listado de usuariost')
}

export const createUsuarios=(req,res)=>{
    res.send("creando usuarios")
}

export const editUsuarios=(req,res)=>{
    res.send("editar usuarios")
}

export const deleteUsuarios=(req,res)=>{
    res.send("eliminar usuarios")
}

export const getIdUsuarios=(req,res)=>{
    res.send("obtener usuario por ID")
}