
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
const valorSeleccionado = select.value;
const opcion = document.getElementById('seleccionaste');
opcion.textContent(valorSeleccionado);
const Ebase = document.getElementById(parseInt('acpm'));
const TituloC = document.getElementById('tituloC');

function TiempoEmisiones(){
  if(opciones == 'eolica'){
     TEbase=Ebase*15/60
     TEolica=Ebase
     EEbase=Ebase*800
     EEolica=Ebase*5    
  }
  else if(opciones == 'solar'){
    TEbase=Ebase*15/60
    TSolar=Ebase
    EEbase=Ebase*800
    ESolar=Ebase*10
  }
  else if(opciones == 'biocombustible'){
    TEbase=Ebase*15/60
    TBiocombustible=Ebase*20/60
    EEbase=Ebase*800
    EBiocombustible=Ebase*70
  }
  else{
    aviso = print("debes seleccionar unda de las energias")
  }    
}
