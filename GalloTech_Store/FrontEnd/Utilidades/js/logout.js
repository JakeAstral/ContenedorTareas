document.addEventListener('DOMContentLoaded', function() {
     // Función para cerrar sesión (puedes añadir un botón para esto)
     function logout() {
        deleteCookie('galloTechActiveSession');
        window.location.href = '../index.html';
    }
});