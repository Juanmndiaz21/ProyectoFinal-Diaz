const contenedorCarrito = document.querySelector(".carritoCard");
const totalCarrito = document.getElementById("totalCarrito");
const finalizarCompraBtn = document.querySelector(".finalizarCompra");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";
    let acumuladoTotal = 0;

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p class='carritoVacio'>El carrito está vacio!</p><a href='../index.html' class='btn btn-primary'>Explorar tienda</a>";
        if (totalCarrito) totalCarrito.textContent = "0.00";
        return;
    }

    // Crear los artículos dinamicamente
    carrito.forEach((producto, index) => {
        acumuladoTotal += producto.precio * producto.cantidad;

        const article = document.createElement("article");
        article.classList.add("carritoCardInfo");

        // corregir ruta de imagen para que funcione en carrito.html
        const rutaCorregida = producto.imagen.replace('./', '../');

        article.innerHTML = `
            <img src="${rutaCorregida}" alt="${producto.titulo}">
            <h3>${producto.titulo}</h3>
            <p>Precio: $${producto.precio.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
            
            <div class="cardBotonesContenedor">
                <button class="cardBotones btnQuitar" data-id="${index}">-</button>
                <p>Cantidad: ${producto.cantidad}</p>
                <button class="cardBotones btnAgregar" data-id="${index}">+</button>
            </div>
            <p>Subtotal: $${(producto.precio * producto.cantidad).toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                        
            <button class="eliminarProducto" data-id="${index}">
                <i class="bi bi-trash3" data-id="${index}"></i>
            </button>
        `;
        contenedorCarrito.appendChild(article);
    });

    // Actualizar total en el resumen
    if (totalCarrito) {
        totalCarrito.textContent = acumuladoTotal.toLocaleString('es-AR', { minimumFractionDigits: 2 });
    }

    asignarEventos();
}

function asignarEventos() {
    // Botones de cantidad
    document.querySelectorAll(".btnAgregar").forEach(btn => btn.onclick = agregarCantidad);
    document.querySelectorAll(".btnQuitar").forEach(btn => btn.onclick = quitarCantidad);

    // Botones de eliminar
    document.querySelectorAll(".eliminarProducto").forEach(btn => btn.onclick = eliminarProducto);
}

function agregarCantidad(e) {
    const index = e.target.dataset.id;
    carrito[index].cantidad++;
    actualizarYRenderizar();
}

function quitarCantidad(e) {
    const index = e.target.dataset.id;
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1);
    }
    actualizarYRenderizar();
}

function eliminarProducto(e) {
    const index = e.target.dataset.id;
    carrito.splice(index, 1);
    actualizarYRenderizar();
}

function actualizarYRenderizar() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// finalizar compra
finalizarCompraBtn.addEventListener("click", () => {
    if (carrito.length === 0) {
        Swal.fire({
            title: "¡Carrito Vacío!",
            text: "Agrega productos al carrito antes de finalizar la compra.",
            icon: "error"
        });
        return;
    }
    Swal.fire({
        title: "Estas seguro de finalizar la compra?",
        text: "Se hara un cargo de $" + (carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)).toLocaleString('es-AR', { minimumFractionDigits: 2 }) + " al metodo de pago seleccionado.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#30d63eff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, finalizar compra"
    }).then((result) => {
        if (result.isConfirmed) Swal.fire({
            title: "¡Compra Finalizada!",
            text: "Tu pedido ha sido procesado.",
            icon: "success"
        });
        if (result.isConfirmed) {
            carrito = [];
            localStorage.removeItem("carrito");
            mostrarCarrito();
        }
    });

});

// inicial
mostrarCarrito();