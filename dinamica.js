
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


const select = document.getElementById('opciones');
const TituloC = document.getElementById('tituloC');
const opcion = document.getElementById('seleccionaste');
const tiempoE = document.getElementById('cte');
const tiempoB = document.getElementById('ctb')
const entrada = document.getElementById('ACPM');
const emisionesB = document.getElementById('ceb')
const emisionesE =document.getElementById('cee')

select.addEventListener('change', () => {
  const valorSeleccionado = select.value;
  TituloC.textContent = valorSeleccionado;
  opcion.textContent = valorSeleccionado;
});

function calcular() {
  TiempoEmisiones();
}

function TiempoEmisiones() {
  const valorSeleccionado = select.value;
  const Ebase = parseFloat(entrada.value);

  if (isNaN(Ebase)) {
    tiempoE.textContent = "Ingresa un número válido";
    return;
  }

  let TEbase = Ebase * 15 / 60;

  if (valorSeleccionado == 'eolica') {
    let TEolica = Ebase;
    tiempoB.textContent = TEbase;
    tiempoE.textContent = TEolica;
    let EEbase = Ebase * 800;
    emisionesB.textContent = EEbase;
    let EEolica = Ebase * 5;
    emisionesE.textContent = EEolica;
  }
  else if (valorSeleccionado == 'solar') {
    let TSolar = Ebase;
    tiempoB.textContent = TEbase;
    tiempoE.textContent = TSolar;
    let EEbase = Ebase * 800;
    emisionesB.textContent = EEbase;
    let ESolar = Ebase * 10;
    emisionesE.textContent = ESolar;
  }
  else if (valorSeleccionado == 'biocombustible') {
    let TBiocombustible = Ebase * 20 / 60;
    tiempoE.textContent = TBiocombustible;
    let EEbase = Ebase * 800;
    emisionesB.textContent = EEbase;
    let EBiocombustible = Ebase * 70;
    emisionesE.textContent = EBiocombustible;
    tiempoB.textContent = TEbase;
  }
  else {
    TituloC.textContent = "Selecciona una energía";
  }
}

