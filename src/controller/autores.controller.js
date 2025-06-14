import { Autores } from "../models/Autores.js";

export const getAllAutor=async(req,res)=>{

    try {
        const data=await Autores.findAll();
        res.json(data)
    } catch (error) {
        console.error('Error al obtener autores:', error);
        res.status(500).json({ error: 'Error al obtener los autores' });
    }

}

export const setAutor= async(req,res)=>{

    try {
        const {name,pais}=req.body
        const dataNew=await Autores.create({
            name,
            pais,
        })
        //console.log(dataNew);
        //res.send("creado conexito").json(dataNew)
        const dataUpdate=await Autores.findByPk(dataNew.id)
        //res.send("Usuario creado").json(dataUpdate)
        res.status(201).json({
            mensaje:"Usuario creado",
            data:dataUpdate
        })

    } catch (error) {
        console.error('Error al obtener autores:', error);
        res.status(500).json({ error: 'Error al obtener los autores' });
    }
}

export const updateAutor=async(req,res)=>{
    try {
        //res.send("actualizando usuarios")
        const {id}=req.params
        const {name,pais}=req.body
        const autor=await Autores.findByPk(id)
        autor.name=name
        autor.pais=pais
        await autor.save()
        res.json(autor)
    } catch (error) {
        console.error('Error al actualizar autor', error);
        res.status(500).json({ error: 'Error al autor' }); 
    }
}

export const deleteAutor=async(req,res)=>{

    try {
        const{id}=req.params
        const dataDelete=await Autores.destroy({
            where:{
                id,
            }
        })
        const dataAfter= await Autores.findAll()
        res.status(201).json({
            message:"usuairo eliminado",
            data:dataAfter
        })
        //res.send("Autor Eliminado") 
    } catch (error) {
        console.error('Error al obtener autores:', error);
        res.status(500).json({ error: 'Error al obtener los autores' });
    }



}

export const getAutor=async(req,res)=>{

    const {id}=req.params

    const data=await Autores.findByPk(id)

    res.json(data)

}