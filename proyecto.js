let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function rotarSlides() {
    slideIndex = (slideIndex + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

// Inicia el carrusel automático cada 3 segundos
setInterval(rotarSlides, 3000);
