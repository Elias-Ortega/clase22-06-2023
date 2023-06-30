const express = require('express');
const hbs = require('hbs');
const clienteService = require('./services/clientesService');
const empleadoService = require('./services/empleadoService');
const productoService = require('./services/productosService');
const ordenService = require('./services/ordenesService');
const detalleDeOrdenService = require('./services/detalleDeOrdenService');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/clientes', (req, res) => {
    res.render('clientes', {
        titulo: 'Clientes',
        arregloClientes: clienteService.leerTodo('customers')
    });
});

app.get('/empleados', (req, res) => {
    res.render('empleados', {
        titulo: 'Empleados',
        arregloEmpleados: empleadoService.leerTodo('employees')
    });
});

app.get('/detallesDeOrden', (req, res) => {
    res.render('detallesDeOrden', {
        titulo: 'Detalles de orden',
        arregloDetalleDeOrden: detalleDeOrdenService.leerTodo('orderDetails')
    });
});

app.get('/ordenes', (req, res) => {
    res.render('ordenes', {
        titulo: 'Órdenes',
        arregloOrdenes: ordenService.leerTodo('orders')
    });
});

app.get('/productos', (req, res) => {
    res.render('productos', {
        titulo: 'Productos',
        arregloProductos: productoService.leerTodo('products')
    });
});

app.listen(8080);