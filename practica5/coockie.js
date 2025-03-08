// Llamar a la función para aplicar los estilos cuando la página se carga
window.onload = function() {
    applyStylesFromCookies();
};

// Función para guardar los estilos en las cookies
function setCookie(name, value, days) {
    let d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));  // Establecer la fecha de expiración
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";  // Guardar la cookie
    console.log('coockie guardada');
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    let nameEq = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEq) === 0) {
            return c.substring(nameEq.length, c.length);  // Devuelve el valor de la cookie
        }
    }
    return "";
}

// Función para aplicar los estilos guardados en las cookies
function applyStylesFromCookies() {
    // Aplicar los estilos guardados de las cookies
    if (getCookie('body-bg')) document.body.style.backgroundColor = getCookie('body-bg');
    if (getCookie('nav-bg')) document.querySelector('nav').style.backgroundColor = getCookie('nav-bg');
    if (getCookie('section-bg')) document.querySelector('section').style.backgroundColor = getCookie('section-bg');
    
    if (getCookie('link-color')) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = getCookie('link-color');
        });
    }
    if (getCookie('link-bg')) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.backgroundColor = getCookie('link-bg');
        });
    }
    if (getCookie('link-radius')) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.borderRadius = getCookie('link-radius') + 'px';
        });
    }

    if (getCookie('img-size')) {
        const img = document.querySelector('img');
        const size = getCookie('img-size');
        img.style.width = size === 'small' ? '150px' : size === 'medium' ? '300px' : '450px';
    }

    if (getCookie('img-border')) {
        const img = document.querySelector('img');
        img.style.border = `2px solid ${getCookie('img-border')}`;
    }

    if (getCookie('img-border-width')) {
        const img = document.querySelector('img');
        img.style.borderWidth = getCookie('img-border-width') + 'px';
    }

    if (getCookie('img-radius')) {
        const img = document.querySelector('img');
        img.style.borderRadius = getCookie('img-radius') + 'px';
    }

    if (getCookie('img-shadow')) {
        const img = document.querySelector('img');
        img.style.boxShadow = getCookie('img-shadow') === 'true' ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none';
    }

    if (getCookie('ul-bg')) {
        const ul = document.querySelector('ul');
        ul.style.backgroundColor = getCookie('ul-bg');
    }

    if (getCookie('li-bg')) {
        const listItems = document.querySelectorAll('ul li');
        listItems.forEach(item => {
            item.style.backgroundColor = getCookie('li-bg');
        });
    }

    if (getCookie('li-border')) {
        const listItems = document.querySelectorAll('ul li');
        listItems.forEach(item => {
            item.style.border = `1px solid ${getCookie('li-border')}`;
        });
    }

    if (getCookie('li-color')) {
        const listItems = document.querySelectorAll('ul li');
        listItems.forEach(item => {
            item.style.color = getCookie('li-color');
        });
    }

    if (getCookie('p-bg')) {
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.backgroundColor = getCookie('p-bg');
        });
    }

    if (getCookie('p-color')) {
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.color = getCookie('p-color');
        });
    }

    if (getCookie('p-size')) {
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.fontSize = getCookie('p-size') + 'px';
        });
    }

    if (getCookie('h-bg')) {
        const headings = document.querySelectorAll('h1, h2, h3, h4');
        headings.forEach(h => {
            h.style.backgroundColor = getCookie('h-bg');
        });
    }

    if (getCookie('h-color')) {
        const headings = document.querySelectorAll('h1, h2, h3, h4');
        headings.forEach(h => {
            h.style.color = getCookie('h-color');
        });
    }

    if (getCookie('h-size')) {
        const headings = document.querySelectorAll('h1, h2, h3, h4');
        headings.forEach(h => {
            h.style.fontSize = getCookie('h-size') + 'px';
        });
    }
}
