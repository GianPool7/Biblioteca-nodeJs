import Autores from './autores.js';
import Libros from './libros.js';

// Relaciones
Autores.hasMany(Libros, { foreignKey: 'id_autor' });
Libros.belongsTo(Autores, { foreignKey: 'id_autor' });

export { Autores, Libros };
