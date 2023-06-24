const fs = require('fs');
const Orden = require('../models/ordenes');

const leerTodo = (nombreArchivo) => {
    const arregloOrdenes = [];
    let datos = fs.readFileSync(`./datos/${nombreArchivo}.csv`, 'utf-8');
    datos = datos.replace(/\r/g, '');
    datos = datos.replace(/\n/g, ';');
    datos = datos.split(';');
    datos.forEach((element, indice) => {
        if ((indice + 1) % 7 == 0) {
            const orden = new Orden(datos[indice - 6], datos[indice - 5], datos[indice - 4], datos[indice - 3], datos[indice - 2], datos[indice - 1], datos[indice]);
            arregloOrdenes.push(orden);
        }
    });
    return arregloOrdenes;
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