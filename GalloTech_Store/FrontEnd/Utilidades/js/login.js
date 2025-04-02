document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const resetBtn = document.getElementById('resetBtn');
    const errorMessage = document.getElementById('errorMessage');
    const usuarioInput = document.getElementById('usuario');
    const passwordInput = document.getElementById('contraseña');
    
    // Verificar si hay una sesión activa
    checkActiveSession();
    
    loginBtn.addEventListener('click', function() {
        const usuario = usuarioInput.value.trim();
        const password = passwordInput.value;
        
        if (!usuario || !password) {
            errorMessage.textContent = 'Por favor, ingresa tu usuario y contraseña.';
            return;
        }
        
        // Verificar credenciales
        const users = getUsersFromCookie();
        const user = users.find(u => u.usuario === usuario && u.password === password);
        
        if (user) {
            // Guardar sesión activa
            setActiveSession(user);
            
            // Redirigir a la tienda
            window.location.href = 'Paginas/tienda.html';
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
        }
    });
    
    resetBtn.addEventListener('click', function() {
        usuarioInput.value = '';
        passwordInput.value = '';
        errorMessage.textContent = '';
    });
    
    // Función para verificar si hay una sesión activa
    function checkActiveSession() {
        const activeUser = getActiveSession();
        if (activeUser) {
            // Si hay una sesión activa, podemos pre-llenar el campo de usuario
            //usuarioInput.value = activeUser.usuario;
            // O redirigir directamente a la tienda
            window.location.href = 'Paginas/tienda.html';
        }
    }
    
    // Función para establecer una sesión activa
    function setActiveSession(user) {
        // Guardar información básica del usuario (no la contraseña)
        const sessionInfo = {
            usuario: user.usuario,
            nombre: user.nombre
        };
        setCookie('galloTechActiveSession', JSON.stringify(sessionInfo), 1); // Sesión por 1 día
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