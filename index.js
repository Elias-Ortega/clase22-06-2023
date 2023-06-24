const express = require('express');
const clienteService = require('./services/clientesService');

const app = express();

app.set('view engine', 'hbs');

app.get('/clientes', (req, res) => {
    res.render('clientes', {
        titulo: 'Clientes',
        arregloClientes: clienteService.leerTodo('customers')
    });
});

app.get('/empleados', (req, res) => {
    res.render('empleados', {
        titulo: 'Empleados'
    });
});

app.get('/detalleDeOrden', (req, res) => {
    res.render('detalleDeOrden', {
        titulo: 'Detalle de orden'
    });
});

app.get('/ordenes', (req, res) => {
    res.render('ordenes', {
        titulo: 'Órdenes'
    });
});

app.get('/productos', (req, res) => {
    res.render('productos', {
        titulo: 'Productos'
    });
});

app.listen(8080);