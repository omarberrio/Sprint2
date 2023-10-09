
 // ------------------------------------------------------------
 // Crear un objeto para representar el carrito de compras
  // ------------------------------------------------------------

  // Crear un objeto para representar el carrito de compras
// Crear un objeto para representar el carrito de compras
const carrito = [];
const inventario = {
    "Ganado de carne": 10,
    "Ganado de leche": 2,
    "Cerdas reproductoras": 20,
    "Cerdos de engorde": 30,
    "Maquinaria agrícola": 5,
    "Recolección cafetera": 15,
    "Plantaciones": 10,
    "Almacenaje": 25,
};

// Agregar un producto al carrito

// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    // Escuchar eventos de clic en los botones "Añadir al carrito"
     // Escuchar eventos de clic en los botones "Añadir al carrito"
     const botonesAgregar = document.querySelectorAll(".añadir-al-carrito");

     botonesAgregar.forEach(boton => {
         boton.addEventListener("click", () => {
             const producto = boton.getAttribute("data-producto");
             const precio = boton.getAttribute("data-precio");
             const tarjetaProducto = boton.closest(".image-container");
             const cantidadDisponible = tarjetaProducto.querySelector(".cantidad-disponible");
             
             // Aquí debes actualizar la cantidad disponible (por ejemplo, restar 1)
             if (cantidadDisponible) {
                 cantidadDisponible.textContent = parseInt(cantidadDisponible.textContent) - 1;
             }
 
             agregarAlCarrito(producto, precio);
        });
    });
});

function agregarAlCarrito(nombre, precio) {
    if (inventario[nombre] > 0) {
        const producto = { nombre, precio };
        carrito.push(producto);
        inventario[nombre]--; // Reducir la cantidad disponible en el inventario
        mostrarCarrito();
        actualizarCantidadCarrito();
    } else {
        alert("El producto está agotado.");
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    
    // Limpiar el contenido existente
    listaCarrito.innerHTML = "";

    // Recorrer los productos en el carrito y mostrarlos en la lista
    carrito.forEach(producto => {
        const listItem = document.createElement("li");
        const precio = producto.precio ? `$${producto.precio.toFixed(2)}` : 'Precio no disponible';
        listItem.textContent = `${producto.nombre} - ${precio}`;
        listaCarrito.appendChild(listItem);
    });
}
// Función para actualizar la cantidad de productos en el carrito
function actualizarCantidadCarrito() {
    const cantidadCarrito = document.getElementById("cantidad-carrito");
    cantidadCarrito.textContent = carrito.length; // Actualiza la cantidad
}

// Función para mostrar la ventana emergente del carrito
function mostrarCarrito() {
    const listaCarritoPopup = document.getElementById("lista-carrito-popup");
    listaCarritoPopup.innerHTML = ""; // Limpia la lista antes de agregar los productos

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button class="eliminar-producto" onclick="eliminarDelCarrito(${index})">X</button>
        `;
        listaCarritoPopup.appendChild(li);
    });

    document.getElementById("carrito-popup").style.display = "block";
}
// Función para cerrar la ventana emergente del carrito
function cerrarCarrito() {
    const carritoPopup = document.getElementById("carrito-popup");
    carritoPopup.style.display = "none";
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    const productoEliminado = carrito[index];
    carrito.splice(index, 1);
    mostrarCarrito();
    actualizarCantidadCarrito();
    calcularTotal(); // Debes implementar esta función para calcular el total
     // Luego, llama a una función para aumentar la cantidad disponible del producto eliminado
     aumentarCantidadDisponible(productoEliminado.nombre);
}

function calcularTotal() {
    const totalCarrito = carrito.reduce((total, producto) => total + parseFloat(producto.precio), 0);
    const totalCarritoElement = document.getElementById("total-carrito");
    totalCarritoElement.textContent = `Total: $${totalCarrito.toFixed(2)}`; // Mostrar el total con dos decimales
}

function aumentarCantidadDisponible(nombreProducto) {
    // Encuentra la tarjeta del producto con el nombre correspondiente
    const tarjetaProducto = document.querySelector(`.image-container:has([data-producto="${nombreProducto}"])`);

    if (tarjetaProducto) {
        // Encuentra el elemento de cantidad disponible dentro de la tarjeta
        const cantidadDisponible = tarjetaProducto.querySelector(".cantidad-disponible");
        
        // Aumenta la cantidad disponible en 1
        if (cantidadDisponible) {
            cantidadDisponible.textContent = parseInt(cantidadDisponible.textContent) + 1;
        }
    }
}



// Define un arreglo de productos (puedes cargarlos desde una API o una base de datos)
const productos = [
    {
      nombre: "Producto 1",
      precio: 100,
      disponibles: 10,
      imagen: "img/productos/producto1.jpg",
    },
    {
      nombre: "Producto 2",
      precio: 150,
      disponibles: 5,
      imagen: "img/productos/producto2.jpg",
    },
    // Agrega más productos aquí
  ];
  
  // Función para cargar productos en el contenedor
  function cargarProductos() {
    const productosContainer = document.getElementById("productos-container");
  
    productos.forEach((producto) => {
      // Crea un elemento para representar el producto
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("col-md-3", "mb-4");
  
      productoDiv.innerHTML = `
        <div class="image-container">
          <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
          <a href="#" class="transparent-box">
            <h1>${producto.nombre}</h1>
            <p>Precio: $${producto.precio}</p>
            <p>Disponibles: <span class="cantidad-disponible">${producto.disponibles}</span></p>
            <button class="añadir-al-carrito" data-producto="${producto.nombre}" data-precio="${producto.precio}">Comprar</button>
          </a>
        </div>
      `;
  
      // Agrega el elemento del producto al contenedor
      productosContainer.appendChild(productoDiv);
    });
  }
  
  // Llama a la función para cargar productos cuando el documento esté completamente cargado
