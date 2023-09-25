// Función para mostrar/ocultar el cuadro traslúcido al hacer clic en la imagen
document.getElementById('image').addEventListener('click', function () {
    var box = document.getElementById('box');
    if (box.style.display === 'block') {
        box.style.display = 'none';
    } else {
        box.style.display = 'block';
    }
});
fetch('strings/en.json')
    .then(response => response.json())
    .then(data => {
        const welcomeText = data.welcome;
        const aboutUsText = data.aboutUs;
        const contactUsText = data.contactUs;
        // Usa estos strings en tu aplicación
    })
    .catch(error => console.error('Error loading strings:', error));
