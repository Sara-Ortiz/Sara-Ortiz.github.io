document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones con la clase 'btn-evidencia'
    const botonesEvidencia = document.querySelectorAll('.btn-evidencia');

    // Itera sobre cada botón y añade un escuchador de eventos
    botonesEvidencia.forEach(boton => {
        boton.addEventListener('click', function() {
            // Obtiene el 'data-id' del botón clicado
            const id = this.getAttribute('data-id');

            // Selecciona el div de información correspondiente
            const infoEvidencia = document.getElementById('ev' + id);

            // Alterna la visibilidad del div
            if (infoEvidencia.style.display === 'none' || infoEvidencia.style.display === '') {
                infoEvidencia.style.display = 'block'; // Muestra la información
            } else {
                infoEvidencia.style.display = 'none'; // Oculta la información
            }
        });
    });
});