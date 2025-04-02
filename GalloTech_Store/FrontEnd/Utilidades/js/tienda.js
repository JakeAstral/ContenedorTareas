document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    // Verificar si el usuario ha iniciado sesión
    const activeUser = getActiveSession();

    logoutBtn.addEventListener('click', function() {
        // Redirigir a la tienda
        logout();
    });
    
    if (!activeUser) {
        // Si no hay sesión activa, redirigir al login
        alert('Debes iniciar sesión para acceder a la tienda.');
        window.location.href = '../index.html';
        return;
    }
    
    // Mostrar nombre de usuario en algún lugar si es necesario
    // Por ejemplo, podríamos añadir un elemento en el header
    
    // Función para cerrar sesión (puedes añadir un botón para esto)
    function logout() {
        deleteCookie('galloTechActiveSession');
        window.location.href = '../index.html';
    }
    
    // Función para obtener la sesión activa
    function getActiveSession() {
        const sessionCookie = getCookie('galloTechActiveSession');
        if (sessionCookie) {
            try {
                return JSON.parse(sessionCookie);
            } catch (e) {
                return null;
            }
        }
        return null;
    }
    
    // Función para obtener una cookie
    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }
    
    // Función para eliminar una cookie
    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
});

//Funcion para productos dinamicos
document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category__link');
    const productsGrid = document.getElementById('productsGrid');
    const productCards = document.querySelectorAll('.product__card');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Cambiar la clase activa de los enlaces
            categoryLinks.forEach(link => link.classList.remove('category__link--active'));
            link.classList.add('category__link--active');

            const category = link.getAttribute('data-category');

            // Mostrar solo los productos de la categoría seleccionada
            productCards.forEach(card => {
                if (card.getAttribute('data-category') === category || category === 'todos') {
                    card.style.display = 'block';  // Mostrar producto
                } else {
                    card.style.display = 'none';  // Ocultar producto
                }
            });
        });
    });
});
