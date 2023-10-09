let contrasena;
let confcontrasena;

const loginForm = document.getElementById("logup-form");
const registrarseButton= document.getElementById("boton-registrarse");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtener los valores de usuario y contraseña
    contrasena = document.getElementById("contrasena").value;
    confcontrasena = document.getElementById("verificar-contrasena").value;

    if (contrasena === confcontrasena) {
        // Si la validación es exitosa, redirigir a la página de inicio
        window.location.href = "login.html";
    } else {
        // Si la validación falla, mostrar una alerta
        alert("Las contraseñas no coinciden");
    }
});