const fs = require('fs');
const Cliente = require('../models/clientes');

const leerTodo = (nombreArchivo) => {
    const arregloClientes = [];
    let datos = fs.readFileSync(`./datos/${nombreArchivo}.csv`, 'utf-8');
    datos = datos.replace(/\r/g, '');
    datos = datos.replace(/\n/g, ';');
    datos = datos.split(';');
    datos.forEach((element, indice) => {
        if ((indice + 1) % 3 == 0) {
            const cliente = new Cliente(datos[indice - 2], datos[indice - 1], datos[indice]);
            arregloClientes.push(cliente);
        }
    });
    return arregloClientes;
}

const leerPorId = (id, nombreArchivo) => {

}

const insertar = (cliente) => {
    const arregloClientes = [];
    let datos = fs.readFileSync(`./datos/customers.csv`, 'utf-8');
    datos = datos.replace(/\r/g, '');
    datos = datos.replace(/\n/g, ';');
    datos = datos.split(';');
    datos.forEach((element, indice) => {
        if ((indice + 1) % 3 == 0) {
            const cliente = new Cliente(datos[indice - 2], datos[indice - 1], datos[indice]);
            arregloClientes.push(cliente);
        }
    });
    let cadena = '';
    arregloClientes.push(cliente);
    arregloClientes.forEach((cliente => {
        cadena = `${cadena} ${cliente.clienteId}; ${cliente.nombreDeCompania};${cliente.nombreDeContacto}\n`;

    }));
    fs.writeFileSync('./datos/customers.csv', cadena);
}

/* const cliente = new Cliente('AAAAA','probando compañia','probando contacto');
insertar(cliente); */ /*  solo era para testear si agregaba un nuevo cliente */

const actualizar = (cliente) => {

}

const eliminar = (id) => {
    const arregloClientes = [];
    let datos = fs.readFileSync(`./datos/customers.csv`, 'utf-8');
    datos = datos.replace(/\r/g, '');
    datos = datos.replace(/\n/g, ';');
    datos = datos.split(';');
    datos.forEach((element, indice) => {
        if ((indice + 1) % 3 == 0) {
            const cliente = new Cliente(datos[indice - 2].trim(), datos[indice - 1].trim(), datos[indice].trim());
            arregloClientes.push(cliente);
        }
    });
    const clientesFiltrados = arregloClientes.filter(elemento => elemento.clienteId.trim() != id.trim());
    let cadena = '';
    clientesFiltrados.forEach((cliente => {
        cadena = `${cadena} ${cliente.clienteId}; ${cliente.nombreDeCompania};${cliente.nombreDeContacto}\n`;

    }));
    fs.writeFileSync('./datos/customers.csv', cadena)


}




module.exports = {
    leerTodo,
    insertar

}