import {Usuarios} from  '../models/Usuarios.js'

export const getAllUsuarios=async(req,res)=>{
    try {
        const dataUser=await Usuarios.findAll();
        res.json(dataUser)        
    } catch (error) {
        console.log("error al obtener datos de usuarios");
        res.status(500).json({error: 'Error al obtener usuarios'})
    }
}

export const createUsuarios=async(req,res)=>{
    try {
        const {name,email}=req.body
        const dataUser=await Usuarios.create({
            name,
            email,
        })
        const dataUpdateUser=await Usuarios.findByPk(dataUser.id)

        res.status(201).json({
            mensaje:"usuario creado",
            data:dataUpdateUser
        })

    } catch (error) {
        console.log("error al crear usuarios");
        res.status(500).json({error: 'Error al obtener usuarios'})
    }
}

export const editUsuarios=async(req,res)=>{
    
    try {
        const {id}=req.params
        const {name,email}=req.body
        const data=await Usuarios.findByPk(id)
        data.name=name
        data.email=email
        await data.save()
        res.json(data)
    } catch (error) {
        console.log("error al editar usuarios");
        res.status(500).json({error: 'Error al editar usuarios'})
    }

}

export const deleteUsuarios=async(req,res)=>{
    try {
        const {id}=req.params
        const dataDelete=await Usuarios.destroy({
            where:{
                id,
            }
        })
        res.json("eliminar usuarios")
    } catch (error) {
        console.log("error al eliminar usuarios");
        res.status(500).json({error: 'Error al eliminar usuarios'})
    }
}

export const getIdUsuarios=async(req,res)=>{
    try {
        const {id}=req.params
        const dataUserUnique=await Usuarios.findByPk(id)
        res.json(dataUserUnique)
    } catch (error) {
        console.log("error al obtener usuario");
        res.status(500).json({error: 'Error al obtener usuario'})
    }
}