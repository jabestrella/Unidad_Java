// Al hacer click sobre el botón de Guardar salta un alert

function guardardatos() {
    alert('Se han guardado los datos');
  };
  
  // Cambio del fondo según hagamos input sobre el cuadro del nombre
  
  const cuadronombre = document.querySelector(".nombre");
  
  function cambiocolorblue() {
    cuadronombre.style.backgroundColor = 'blue';
  };
  
  function cambiocolorblack() {
    cuadronombre.style.backgroundColor = 'black';
  };
  
  // Si la letra que escribamos es vocal aparecerá de color rojo y de verde si es consonante
  
  const escribeunaletra = document.querySelector('.cifrasyletras');
  
  function vocalconsonante(event){
    const currentLetter = event.which;
    if (currentLetter === 97 || currentLetter === 101 || currentLetter === 105 || currentLetter === 111 || currentLetter === 117) {
      escribeunaletra.style.color = 'red';
    } else {
      escribeunaletra.style.color = 'green';
    }
  };