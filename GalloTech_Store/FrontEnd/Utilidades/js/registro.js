document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const errorMessage = document.getElementById('errorMessage');
    
    registerBtn.addEventListener('click', function() {
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const edad = document.getElementById('edad').value.trim();
        const email = document.getElementById('email').value.trim();
        const usuario = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validar que todos los campos estén completos
        if (!nombre || !edad || !email || !usuario || !password || !confirmPassword) {
            errorMessage.textContent = 'Por favor, completa todos los campos.';
            return;
        }
        
        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            errorMessage.textContent = 'Las contraseñas no coinciden.';
            return;
        }
        
        // Verificar si el usuario ya existe
        const existingUsers = getUsersFromCookie();
        if (existingUsers.some(user => user.usuario === usuario)) {
            errorMessage.textContent = 'Este nombre de usuario ya está en uso.';
            return;
        }
        
        // Crear objeto de usuario
        const user = {
            nombre,
            edad,
            email,
            usuario,
            password // En una aplicación real, nunca almacenes contraseñas en texto plano
        };
        
        // Guardar usuario en cookies
        saveUserToCookie(user);
        
        // Mostrar mensaje de éxito y redirigir
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        window.location.href = '../index.html';
    });
    
    // Función para obtener usuarios de la cookie
    function getUsersFromCookie() {
        const usersCookie = getCookie('galloTechUsers');
        if (usersCookie) {
            try {
                return JSON.parse(usersCookie);
            } catch (e) {
                return [];
            }
        }
        return [];
    }
    
    // Función para guardar usuario en la cookie
    function saveUserToCookie(user) {
        const users = getUsersFromCookie();
        users.push(user);
        setCookie('galloTechUsers', JSON.stringify(users), 30); // Guardar por 30 días
    }
    
    // Función para establecer una cookie
    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
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
});