const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
};
const completado = {
    completado: {
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
};
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra la tarea por la descripción', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}