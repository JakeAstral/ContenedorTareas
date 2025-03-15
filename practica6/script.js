document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validarFormulario();
});

async function validarFormulario() {
    let isValid = true;

    // Validación de nombre (letras y espacios)
    let nombre = document.getElementById("nombre").value;
    let nombreError = document.getElementById("nombreError");
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        nombreError.textContent = "El nombre solo puede contener letras y espacios.";
        document.getElementById("nombre").classList.add("error");
        isValid = false;
    } else {
        nombreError.textContent = "";
        document.getElementById("nombre").classList.remove("error");
    }

    // Validación de edad (números entre 1 y 100)
    let edad = document.getElementById("edad").value;
    let edadError = document.getElementById("edadError");
    if (!(edad > 0 && edad < 100)) {
        edadError.textContent = "La edad debe estar entre 1 y 100.";
        document.getElementById("edad").classList.add("error");
        isValid = false;
    } else {
        edadError.textContent = "";
        document.getElementById("edad").classList.remove("error");
    }

    // Validación de email (formato estándar de email)
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "El correo electrónico no es válido.";
        document.getElementById("email").classList.add("error");
        isValid = false;
    } else {
        emailError.textContent = "";
        document.getElementById("email").classList.remove("error");
    }

    // Validación de usuario (sin espacios, solo letras y números, al menos 5 caracteres)
    let usuario = document.getElementById("usuario").value;
    let usuarioError = document.getElementById("usuarioError");
    if (!/^[a-zA-Z0-9]{5,}$/.test(usuario)) {
        usuarioError.textContent = "El usuario debe tener al menos 5 caracteres sin espacios, solo letras y números.";
        document.getElementById("usuario").classList.add("error");
        isValid = false;
    } else {
        usuarioError.textContent = "";
        document.getElementById("usuario").classList.remove("error");
    }

    // Validación de contraseña
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}/.test(password)) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, con una letra, un número y un carácter especial.";
        document.getElementById("password").classList.add("error");
        isValid = false;
    } else {
        passwordError.textContent = "";
        document.getElementById("password").classList.remove("error");
    }

    // Validación de confirmación de contraseña
    let confirmPassword = document.getElementById("confirmPassword").value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Las contraseñas no coinciden.";
        document.getElementById("confirmPassword").classList.add("error");
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
        document.getElementById("confirmPassword").classList.remove("error");
    }

    // Si todo es válido, mostrar los datos
    if (isValid) {
        // Esperar a que la contraseña esté encriptada antes de mostrarla
        let encryptedPassword = await encriptarPassword(password);
        document.getElementById("datos").innerHTML = `
            <h3>Datos Ingresados</h3>
            <p>Nombre: ${nombre}</p>
            <p>Edad: ${edad}</p>
            <p>Email: ${email}</p>
            <p>Usuario: ${usuario}</p>
            <p>Contraseña original: ${password}</p>
            <p>Contraseña encriptada: ${encryptedPassword}</p>
        `;
    }
}

// Función para encriptar la contraseña
async function encriptarPassword(password) {
    // Usamos la API Web Crypto para encriptar la contraseña con SHA-256
    const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(password));
    let hashArray = Array.from(new Uint8Array(hashBuffer)); 
    let hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join(""); 
    return hashHex;
}

// Función para mostrar u ocultar las contraseñas
function mostrarPassword(id) {
    var passwordField = document.getElementById(id);
    if (passwordField.type === "password") {
        passwordField.type = "text";  // Cambia el tipo a texto
    } else {
        passwordField.type = "password";  // Cambia el tipo a contraseña
    }
}

// Función para limpiar los campos
function limpiarCampos() {
    document.getElementById("myForm").reset();
    document.getElementById("result").innerHTML = "";
}
