let usuario;
let contrasena;

// Obtener el formulario y el botón de "Iniciar Sesión"
const loginForm = document.getElementById("login-form");
const iniciarSesionButton = document.getElementById("boton-iniciar-sesion");
// Agregar un controlador de eventos para el envío del formulario
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtener los valores de usuario y contraseña
    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById("contrasena").value;

    // Realizar la validación y redirigir si es exitosa
    if (usuario === "mail@mail.com" && contrasena === "contraseña") {
        // Si la validación es exitosa, redirigir a la página de inicio
        window.location.href = "home.html";
    } else {
        // Si la validación falla, mostrar una alerta
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});

