//  Iniciar el carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Seleccionar el contenedor
const contenedorProductos = document.getElementById('contenedor-productos');

// Función para pedir los productos al JSON
async function pedirProductos() {
    try {
        const response = await fetch('./json/base-datos.json');
        const productos = await response.json();
        renderizarProductos(productos);
    } catch (error) {
    }
}

// Funcion para renderizar los productos
function renderizarProductos(productos) {
    contenedorProductos.innerHTML = '';
    productos.forEach(producto => {
        const productoHTML = `
            <article class="cards">
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <h3>${producto.titulo}</h3>
                <p class="cardsPrecio">$${producto.precio.toLocaleString('es-AR')}</p>
                <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
            </article>
        `;
        contenedorProductos.innerHTML += productoHTML;
    });
    asignarEventosBotones(productos);
}

// Funcion para asignar eventos a los botones de agregar al carrito
function asignarEventosBotones(productos) {
    const botones = document.querySelectorAll('.btn-agregar');
    botones.forEach(boton => {
        boton.onclick = (e) => {
            const idParaAgregar = parseInt(e.target.dataset.id);
            const productoEncontrado = productos.find(p => p.id === idParaAgregar);
            agregarAlCarrito(productoEncontrado);
        };
    });
}

// Agregar al carrito y sweetalert
function agregarAlCarrito(producto) {
    const existe = carrito.find(item => item.titulo === producto.titulo);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    // SweetAlert
    Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: "#434366ff",
        color: "#ffffff",
    }).fire({
        icon: "success",
        title: `${producto.titulo.toLowerCase()} agregado!`,
    });
}

// Iniciar la aplicación
pedirProductos();