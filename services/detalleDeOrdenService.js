const fs = require('fs');
const DetalleDeOrden = require('../models/detalleDeOrden');

const leerTodo = (nombreArchivo) => {
    const arregloDetalles = [];
    let datos = fs.readFileSync(`./datos/${nombreArchivo}.csv`, 'utf-8');
    datos = datos.replace(/\r/g, '');
    datos = datos.replace(/\n/g, ';');
    datos = datos.split(';');
    datos.forEach((element, indice) => {
        if ((indice + 1) % 5 == 0) {
            const detalleDeOrden = new DetalleDeOrden(datos[indice - 4], datos[indice - 3], datos[indice - 2], datos[indice - 1], datos[indice]);
            arregloDetalles.push(detalleDeOrden);
        }
    });
    return arregloDetalles;
}

const leerPorId = (id, nombreArchivo) => {

}

const insertar = (cliente) => {

}

const actualizar = (cliente) => {

}

const eliminar = (id) => {

}

module.exports = {
    leerTodo
}