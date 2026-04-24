
const agregarAlCarrito = document.querySelectorAll('.cards button');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

agregarAlCarrito.forEach(boton => boton.addEventListener('click', agregarProductoAlCarrito));

function agregarProductoAlCarrito(e) {
    const botonClickeado = e.target;
    const productoCard = botonClickeado.closest('.cards');

    // compilacion de datos del producto (titulo, precio, imagen)
    const titulo = productoCard.querySelector('h3').textContent;
    const precioTexto = productoCard.querySelector('.cardsPrecio').textContent;
    const precio = Number(precioTexto.replace('$', '').replace('.', ''));
    const imagenSrc = productoCard.querySelector('img').src;


    // Validacion carrito
    const productoExistente = carrito.find(producto => producto.titulo === titulo);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        const nuevoProducto = {
            titulo: titulo,
            precio: precio,
            imagen: imagenSrc,
            cantidad: 1
        };
        carrito.push(nuevoProducto);
    }

    // LOCALSTORAGE 
    localStorage.setItem('carrito', JSON.stringify(carrito));
    Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        background: "#434366ff",
        color: "#ffffff",
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    }).fire({
        icon: "success",
        title: `${titulo.toLowerCase()} agregado al carrito!`,
    });
}