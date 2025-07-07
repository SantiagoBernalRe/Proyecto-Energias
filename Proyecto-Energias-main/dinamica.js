
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      // Scroll suave manual (más control que scroll-behavior)
      destino.scrollIntoView({ behavior: 'smooth' });

      // Elimina clases previas
      document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('seccion-animada');
      });

      // Le agregamos clase de rebote
      setTimeout(() => {
        destino.classList.add('seccion-animada');
      }, 300);
    }
  });
});
function calcular{}