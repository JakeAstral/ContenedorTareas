document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    let formIsValid = true;

    // Limpiar los mensajes de error previos
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('error-field'));

    // Validar nombre (solo letras y espacios)
    const nombre = document.getElementById('nombre').value.trim();
    const nombreRegex = /^[A-Za-z\s]+$/;
    if (nombre === '' || !nombreRegex.test(nombre)) {
        document.getElementById('nombreError').textContent = 'El nombre solo puede contener letras y espacios.';
        document.getElementById('nombre').classList.add('error-field');
        formIsValid = false;
    }

    // Validar edad (solo números entre 1 y 100)
    const edad = document.getElementById('edad').value.trim();
    if (edad === '' || isNaN(edad) || edad <= 0 || edad > 100) {
        document.getElementById('edadError').textContent = 'Por favor, ingrese una edad válida entre 1 y 100.';
        document.getElementById('edad').classList.add('error-field');
        formIsValid = false;
    }

    // Validar correo (formato válido de correo)
    const correo = document.getElementById('correo').value.trim();
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (correo === '' || !correoRegex.test(correo)) {
        document.getElementById('correoError').textContent = 'Por favor, ingrese un correo válido.';
        document.getElementById('correo').classList.add('error-field');
        formIsValid = false;
    }

    // Validar usuario (solo letras y números, mínimo 5 caracteres)
    const usuario = document.getElementById('usuario').value.trim();
    const usuarioRegex = /^[A-Za-z0-9]{5,}$/;
    if (usuario === '' || !usuarioRegex.test(usuario)) {
        document.getElementById('usuarioError').textContent = 'El usuario debe tener al menos 5 caracteres, solo letras y números.';
        document.getElementById('usuario').classList.add('error-field');
        formIsValid = false;
    }

    // Validar contraseña (mínimo 8 caracteres, al menos una letra, un número y un símbolo)
    const contrasena = document.getElementById('contrasena').value.trim();
    const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (contrasena === '' || !contrasenaRegex.test(contrasena)) {
        document.getElementById('contrasenaError').textContent = 'La contraseña debe tener al menos 8 caracteres, una letra, un número y un símbolo.';
        document.getElementById('contrasena').classList.add('error-field');
        formIsValid = false;
    }

    // Validar confirmación de contraseña
    const confirmarContrasena = document.getElementById('confirmarContrasena').value.trim();
    if (confirmarContrasena !== contrasena) {
        document.getElementById('confirmarContrasenaError').textContent = 'Las contraseñas no coinciden.';
        document.getElementById('confirmarContrasena').classList.add('error-field');
        formIsValid = false;
    }

    // Si todos los campos son válidos, proceder
    if (formIsValid) {
        // Encriptar contraseña usando SHA-256
        const encryptedPassword = sha256(contrasena);

        // Mostrar la información ingresada
        document.getElementById('formInfo').style.display = 'block';
        document.getElementById('infoNombre').textContent = 'Nombre: ' + nombre;
        document.getElementById('infoEdad').textContent = 'Edad: ' + edad;
        document.getElementById('infoCorreo').textContent = 'Correo: ' + correo;
        document.getElementById('infoUsuario').textContent = 'Usuario: ' + usuario;
        document.getElementById('infoContrasena').textContent = 'Contraseña: ' + contrasena;
        document.getElementById('infoContrasenaEncriptada').textContent = 'Contraseña Encriptada: ' + encryptedPassword;
    }
});

// Función para mostrar/ocultar la contraseña
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('contrasena');
    const confirmPasswordField = document.getElementById('confirmarContrasena');
    if (this.checked) {
        passwordField.type = 'text';
        confirmPasswordField.type = 'text';
    } else {
        passwordField.type = 'password';
        confirmPasswordField.type = 'password';
    }
});

// Función para cancelar el formulario y limpiar los campos
document.getElementById('cancelButton').addEventListener('click', function() {
    if (confirm('¿Estás seguro de que quieres cancelar?')) {
        document.getElementById('registrationForm').reset();
        document.querySelectorAll('.error').forEach(error => error.textContent = '');
        document.querySelectorAll('input').forEach(input => input.classList.remove('error-field'));
        document.getElementById('formInfo').style.display = 'none';
    }
});