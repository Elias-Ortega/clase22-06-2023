const arregloBotonesEliminar = document.querySelectorAll('#btnEliminar');
arregloBotonesEliminar.forEach((boton) => {
    boton.addEventListener('click', (event) =>{
        const respuesta = prompt('Seguro que deseas eliminar?');
        if(respuesta != 'Si'){
            event.preventDefault();
        }
    });
})
