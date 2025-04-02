document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const errorMessage = document.getElementById('errorMessage');
    const usuarioInput = document.getElementById('usuario');
    const passwordInput = document.getElementById('password');
    
    // Registrar usuario
    registerBtn.addEventListener('click', function() {
        // Limpiar mensaje de error previo
        errorMessage.textContent = '';
        
        // Obtener valores del formulario
        const usuario = usuarioInput.value.trim();
        const password = passwordInput.value;
        
        // Validar campos
        if (!usuario || !password) {
            errorMessage.textContent = 'Por favor, completa todos los campos.';
            return;
        }
        
        // Validar longitud mínima
        if (usuario.length < 3) {
            errorMessage.textContent = 'El usuario debe tener al menos 3 caracteres.';
            return;
        }
        
        if (password.length < 4) {
            errorMessage.textContent = 'La contraseña debe tener al menos 4 caracteres.';
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
            usuario,
            password
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