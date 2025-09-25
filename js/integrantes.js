document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los contenedores de información de los integrantes
    const infoElementos = document.querySelectorAll('.integrante-info');

    // Itera sobre ellos para asegurar que estén ocultos por defecto
    // Esto es una capa extra de seguridad si el CSS no se carga a tiempo
    infoElementos.forEach(info => {
        info.style.display = 'none';
    });
});

function toggleInfo(id) {
    // Selecciona el contenedor de información usando el ID pasado
    const info = document.getElementById(id);

    // Alterna la visibilidad del contenedor
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block'; // Muestra la información
    } else {
        info.style.display = 'none'; // Oculta la información
    }
}