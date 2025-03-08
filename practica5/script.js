// Abre el modal al hacer clic en el botón de abrir
document.getElementById('open-modal-btn').addEventListener('click', function() {
    document.getElementById('config-modal').style.display = 'flex';
});

// Cierra el modal al hacer clic en el botón de cerrar
document.getElementById('close-modal-btn').addEventListener('click', function() {
    document.getElementById('config-modal').style.display = 'none';
});

// Cierra el modal al hacer clic fuera del modal
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('config-modal')) {
        document.getElementById('config-modal').style.display = 'none';
    }
});

// Función que actualiza los estilos en vivo dentro de modal-live
function updateLiveStyles() {
    // Cambios de fondo en modal-live
    document.querySelector('.modal-live').style.backgroundColor = document.getElementById('body-bg').value;
    document.querySelector('.modal-live nav').style.backgroundColor = document.getElementById('nav-bg').value;
    document.querySelector('.modal-live section').style.backgroundColor = document.getElementById('section-bg').value;

    // Cambios de enlaces en modal-live
    const links = document.querySelectorAll('.modal-live a');
    links.forEach(link => {
        link.style.color = document.getElementById('link-color').value;
        link.style.backgroundColor = document.getElementById('link-bg').value;
        link.style.borderRadius = document.getElementById('link-radius').value + 'px';
    });

    // Cambios de imagen en modal-live
    const img = document.querySelector('.modal-live img');
    img.style.width = document.getElementById('img-size').value === 'small' ? '150px' :
                      document.getElementById('img-size').value === 'medium' ? '300px' : '450px';
    img.style.border = `${document.getElementById('img-border-width').value}px solid ${document.getElementById('img-border').value}`;
    img.style.borderRadius = document.getElementById('img-radius').value + 'px';
    img.style.boxShadow = document.getElementById('img-shadow').checked ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none';

    // Cambios de lista (ul, li) en modal-live
    const listItems = document.querySelectorAll('.modal-live ul li');
    listItems.forEach(item => {
        item.style.backgroundColor = document.getElementById('li-bg').value;
        item.style.border = `1px solid ${document.getElementById('li-border').value}`;
        item.style.color = document.getElementById('li-color').value;
    });

    // Cambios de párrafos en modal-live
    const paragraphs = document.querySelectorAll('.modal-live p');
    paragraphs.forEach(p => {
        p.style.backgroundColor = document.getElementById('p-bg').value;
        p.style.color = document.getElementById('p-color').value;
        p.style.fontSize = document.getElementById('p-size').value + 'px';
    });

    // Cambios de títulos (h1, h2) en modal-live
    const headings = document.querySelectorAll('.modal-live h1, .modal-live h2');
    headings.forEach(h => {
        h.style.backgroundColor = document.getElementById('h-bg').value;
        h.style.color = document.getElementById('h-color').value;
        h.style.fontSize = document.getElementById('h-size').value + 'px';
    });
}

// Añadir evento input a todos los elementos del formulario para aplicar cambios en vivo en modal-live
document.querySelectorAll('#config-form input, #config-form select').forEach(input => {
    input.addEventListener('input', updateLiveStyles);
});

// Función que aplica los cambios a la página al hacer clic en "Aplicar cambios"
document.getElementById('config-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Cambios de fondo en la página real
    document.body.style.backgroundColor = document.getElementById('body-bg').value;
    document.querySelector('nav').style.backgroundColor = document.getElementById('nav-bg').value;
    document.querySelector('section').style.backgroundColor = document.getElementById('section-bg').value;

    // Cambios de enlaces en la página real
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = document.getElementById('link-color').value;
        link.style.backgroundColor = document.getElementById('link-bg').value;
        link.style.borderRadius = document.getElementById('link-radius').value + 'px';
    });

    // Cambios de imagen en la página real
    const img = document.querySelector('img');
    img.style.width = document.getElementById('img-size').value === 'small' ? '150px' :
                      document.getElementById('img-size').value === 'medium' ? '300px' : '450px';
    img.style.border = `${document.getElementById('img-border-width').value}px solid ${document.getElementById('img-border').value}`;
    img.style.borderRadius = document.getElementById('img-radius').value + 'px';
    img.style.boxShadow = document.getElementById('img-shadow').checked ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none';

    // Cambios de lista (ul, li) en la página real
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
        item.style.backgroundColor = document.getElementById('li-bg').value;
        item.style.border = `1px solid ${document.getElementById('li-border').value}`;
        item.style.color = document.getElementById('li-color').value;
    });

    // Cambios de párrafos en la página real
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.backgroundColor = document.getElementById('p-bg').value;
        p.style.color = document.getElementById('p-color').value;
        p.style.fontSize = document.getElementById('p-size').value + 'px';
    });

    // Cambios de títulos (h1, h2) en la página real
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(h => {
        h.style.backgroundColor = document.getElementById('h-bg').value;
        h.style.color = document.getElementById('h-color').value;
        h.style.fontSize = document.getElementById('h-size').value + 'px';
    });

        // Guardar los estilos en las cookies
        setCookie('body-bg', document.getElementById('body-bg').value, 30);
        setCookie('nav-bg', document.getElementById('nav-bg').value, 30);
        setCookie('section-bg', document.getElementById('section-bg').value, 30);
        setCookie('link-color', document.getElementById('link-color').value, 30);
        setCookie('link-bg', document.getElementById('link-bg').value, 30);
        setCookie('link-radius', document.getElementById('link-radius').value, 30);
        setCookie('img-size', document.getElementById('img-size').value, 30);
        setCookie('img-border', document.getElementById('img-border').value, 30);
        setCookie('img-border-width', document.getElementById('img-border-width').value, 30);
        setCookie('img-radius', document.getElementById('img-radius').value, 30);
        setCookie('img-shadow', document.getElementById('img-shadow').checked, 30);
        setCookie('ul-bg', document.getElementById('ul-bg').value, 30);
        setCookie('li-bg', document.getElementById('li-bg').value, 30);
        setCookie('li-border', document.getElementById('li-border').value, 30);
        setCookie('li-color', document.getElementById('li-color').value, 30);
        setCookie('p-bg', document.getElementById('p-bg').value, 30);
        setCookie('p-color', document.getElementById('p-color').value, 30);
        setCookie('p-size', document.getElementById('p-size').value, 30);
        setCookie('h-bg', document.getElementById('h-bg').value, 30);
        setCookie('h-color', document.getElementById('h-color').value, 30);
        setCookie('h-size', document.getElementById('h-size').value, 30);
    
        document.getElementById('config-modal').style.display = 'none';  // Cierra el modal
        applyStylesFromCookies();  // Aplica los estilos guardados

    // Cierra el modal después de aplicar los cambios
    document.getElementById('config-modal').style.display = 'none';


});
