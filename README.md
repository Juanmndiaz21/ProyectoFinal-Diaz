# Proyecto Final: Tienda E-commerce RZR - Díaz

Este proyecto consiste en una aplicación web de e-commerce completamente funcional, desarrollada como cierre de la formación en JavaScript. La aplicación permite gestionar un catálogo de productos de manera dinámica, administrando un flujo de compra completo desde la selección hasta la confirmación final.

## 📝 Descripción del Proyecto
La plataforma ha sido diseñada para ofrecer una experiencia de usuario fluida y moderna. A través de la interacción con el DOM, el consumo de datos asincrónicos y el manejo de eventos, el sistema permite a los usuarios navegar por una colección de prendas, gestionar un carrito de compras con persistencia de datos y recibir feedback visual en cada acción.

## 🚀 Características Principales
- **Carga de Datos Asincrónica:** Los productos no están estáticos en el HTML, sino que se obtienen de forma dinámica mediante `Fetch` desde un archivo JSON local, simulando una integración con una API real.
- **Carrito de Compras con Lógica de Negocio:**
  - Adición de productos con detección de duplicados para aumentar cantidad.
  - Modificación de cantidades (sumar/restar) directamente en la vista del carrito.
  - Eliminación de ítems individuales y cálculo automático de totales y subtotales.
- **Persistencia con WebStorage:** Implementación de `LocalStorage` para garantizar que el usuario no pierda su selección al recargar la página o cerrar el navegador.
- **Interfaz de Usuario Dinámica:** Renderizado de componentes mediante JavaScript, asegurando una estructura limpia y fácil de escalar.
- **Feedback mediante Librerías:** Uso de `SweetAlert2` para notificaciones elegantes (Toasts) y diálogos de confirmación de compra.

## 🛠️ Stack Tecnológico
- **Maquetación:** HTML5 & CSS3 (Diseño responsivo basado en Flexbox y Grid).
- **Estilos:** Bootstrap 5.3 para la estructura de navegación y componentes.
- **Lógica de Programación:** JavaScript Vanilla (ES6+).
- **Asincronía:** Uso de Promesas y `Async/Await` para la gestión de datos remotos.

## 📂 Estructura del Repositorio
- `index.html`: Punto de entrada principal y vista del catálogo de productos.
- `pages/carrito.html`: Interfaz dedicada a la gestión y revisión de la compra.
- `js/index.js`: Motor de la página principal (Fetch y renderizado).
- `js/carrito.js`: Lógica detallada del carrito y cálculos financieros.
- `json/base-datos.json`: Fuente de datos estructurada con el catálogo de productos.
- `assets/`: Galería de imágenes y recursos estáticos.

## ⚙️ Guía de Ejecución
Para visualizar correctamente el proyecto y permitir el funcionamiento del método `fetch`, se recomienda ejecutarlo mediante un servidor local:
1. Clonar o descargar este repositorio.
2. Abrir la carpeta con **Visual Studio Code**.
3. Iniciar el proyecto utilizando la extensión **Live Server**.
4. Navegar por el catálogo, agregar productos y proceder al checkout en la página del carrito.

## 🎓 Contexto
Este desarrollo representa la integración de conocimientos sobre manejo de arreglos, objetos, funciones de orden superior, manejo del DOM, eventos, almacenamiento local y asincronía en JavaScript.

---
**Desarrollado por Díaz** *Proyecto de ejemplo con fines educativos.*
