import {Libros} from '../models/Libros.js'

export const getAllLibros=async(req,res)=>{
    try {
        // res.send("obteniendo los libros")
        const libros= await Libros.findAll();
        res.json(libros)
    } catch (error) {
        console.error('Error al obtener libros:', error);
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
}

export const createLibros=async(req,res)=>{
    try {
        const {titulo,categoria,anio_publicacion,id_author,estado}=req.body
        // res.send("enviando libros")
        const dataCreate=await Libros.create({
            titulo,
            categoria,
            anio_publicacion,
            id_author,
            estado
        })
    } catch (error) {
        console.error('Error al crear el libro', error);
        res.status(500).json({ error: 'Error al crear' });
    }
}

export const editLibros=async(req,res)=>{
    //res.send("editar los libros")
    try {
        const {id}=req.params
        const {titulo,categoria,anio_publicacion,id_author,estado}=req.body
        const libro=await Libros.findByPk(id)
        libro.titulo=titulo
        libro.categoria=categoria
        libro.anio_publicacion=anio_publicacion
        libro.id_author=id_author
        libro.estado=estado
        await libro.save()
        res.json(libro)
    } catch (error) {
        console.error('Error al actualizar el libro', error);
        res.status(500).json({ error: 'Error al actualizar' }); 
    }
}

export const deleteLibros=async(req,res)=>{
    try {
        const {id}=req.params
        const dataDeleteLibro=await Libros.destroy({
            where:id,
        })
        res.json(dataDeleteLibro)
        // res.send("eliminar libros")
    } catch (error) {
        
    }
}

export const getLibroId=async(req,res)=>{
    try {
        const {id}=req.params
        const data=await Libros.findOne({
            where:id,
        })
        res.json(data)
        //res.send("obtener libro ID")
    } catch (error) {
        console.error('Error al obetener el libro', error);
        res.status(500).json({ error: 'Error al obtener libro' });
    }
}