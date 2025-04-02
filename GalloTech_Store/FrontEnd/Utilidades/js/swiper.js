// Inicialización de Swiper
/*const swiper = new Swiper('.swiper-container', {
    loop: true, // Habilita el bucle infinito
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500, // Tiempo en milisegundos entre cada diapositiva
        disableOnInteraction: true, // No desactiva el autoplay al interactuar
    },
    slidesPerView: 3, // Número de diapositivas visibles
    slidesPerGroup: 1, // Número de diapositivas por grupo
    loopAdditionalSlides: 1, // Número de diapositivas adicionales para el bucle
  });*/

// Definimos el media query
const mediaQuery = window.matchMedia("(max-width: 768px)");

// Función que se ejecutará cuando el media query cambie
function handleMediaChange(event) {
  if (event.matches) {
    // Si el ancho es menor o igual a 768px
    // Inicialización de Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Habilita el bucle infinito
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500, // Tiempo en milisegundos entre cada diapositiva
            disableOnInteraction: true, // No desactiva el autoplay al interactuar
        },
        slidesPerView: 1, // Número de diapositivas visibles
        slidesPerGroup: 1, // Número de diapositivas por grupo
        loopAdditionalSlides: 1, // Número de diapositivas adicionales para el bucle
    });
    console.log("La pantalla tiene un ancho menor o igual a 768px");
  } else {
    // Si el ancho es mayor a 768px
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Habilita el bucle infinito
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500, // Tiempo en milisegundos entre cada diapositiva
            disableOnInteraction: true, // No desactiva el autoplay al interactuar
        },
        slidesPerView: 3, // Número de diapositivas visibles
        slidesPerGroup: 1, // Número de diapositivas por grupo
        loopAdditionalSlides: 1, // Número de diapositivas adicionales para el bucle
    });
    console.log("La pantalla tiene un ancho mayor a 768px");
  }
}

// Ejecutar la función de inmediato con el estado actual
handleMediaChange(mediaQuery);

// Escuchar cambios en el estado del media query
mediaQuery.addEventListener("change", handleMediaChange);
