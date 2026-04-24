# ProyectoFinal-Diaz

Tienda web simple creada con HTML, CSS y JavaScript. Permite navegar productos, agregarlos a un carrito y finalizar la compra usando LocalStorage para persistencia.

## Vista rápida
- Abrir [index.html](index.html) para ver la tienda y agregar productos.
- Abrir [pages/carrito.html](pages/carrito.html) para ver y gestionar el carrito.

## Estructura del proyecto
- `index.html` — Página principal con productos.
- `pages/carrito.html` — Página del carrito y resumen de compra.
- `css/styles.css` — Estilos globales.
- `css/carrito.css` — Estilos específicos del carrito.
- `js/index.js` — Lógica para agregar productos desde la vista de productos.
- `js/carrito.js` — Lógica del carrito, renderizado y finalizar compra.
- `js/db.js` — Datos de ejemplo de productos.
- `assets/` — Imágenes y recursos estáticos.
- `json/base-datos.json` — (archivo de datos adicional).

## Funcionalidades principales
- Agregar productos al carrito desde la lista de productos (ver [`agregarProductoAlCarrito`](js/index.js)).
- Mostrar, actualizar cantidades y eliminar productos en el carrito (ver [`mostrarCarrito`](js/carrito.js)).
- Datos de muestra en [`productos`](js/db.js).
- Persistencia del carrito en LocalStorage para mantener estado entre sesiones.

## Tecnologías
- HTML5
- CSS3 (Bootstrap para componentes)
- JavaScript (Vanilla)
- SweetAlert2 para feedback y confirmaciones

## Uso
1. Abrir `index.html` en el navegador.
2. Hacer clic en "Agregar al carrito" en cualquiera de las tarjetas de producto.
3. Ir a la página del carrito (`pages/carrito.html`) para revisar, cambiar cantidades o finalizar la compra.

## Personalización rápida
- Añadir/editar productos en `js/db.js` o modificar las tarjetas en `index.html`.
- Cambiar estilos en `css/styles.css` y `css/carrito.css`.
- Imágenes en `assets/img/ropa/`.

## Notas
- Los precios están formateados con `es-AR` en el frontend.
- El carrito se guarda en `localStorage` con la clave `carrito`.

## Archivos y funciones importantes (en este repositorio)
- [index.html](index.html)
- [pages/carrito.html](pages/carrito.html)
- [css/styles.css](css/styles.css)
- [css/carrito.css](css/carrito.css)
- [js/index.js](js/index.js)
- [js/carrito.js](js/carrito.js)
- [js/db.js](js/db.js)
- [json/base-datos.json](json/base-datos.json)

## Licencia
Proyecto de ejemplo. Usar y modificar libremente.
