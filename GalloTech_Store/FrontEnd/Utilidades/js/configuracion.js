document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los inputs radio
    const colorSelectors = document.querySelectorAll('.color__selector');

    // Cargar la configuración guardada
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.querySelector(`#${savedTheme}`).checked = true; // Marcar el tema guardado
    }

    // Guardar la selección del tema cuando el usuario cambie la opción
    colorSelectors.forEach(selector => {
        selector.addEventListener('change', function() {
            const selectedTheme = this.id;
            localStorage.setItem('theme', selectedTheme); // Guardar la selección
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Aplicar el tema en la página
        document.body.classList.add(savedTheme); // Agregar la clase del tema al body
    }
});