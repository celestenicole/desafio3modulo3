// 2.1 Script y estructura de carpetas

function pintar() {
  ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
//ele.addEventListener("click", pintar);


// 2.2 Modificar funcion para recibir el elemento clickeado

function pintar2(element) {
  element.style.backgroundColor = 'yellow';
}

// ele.addEventListener( 'click', (event) => {
//   pintar2(event.target);
// });


// 2.3 Modifica el código anterior para poder pasarle un color como argumento a la función pintar

const pintar3 = (element, color = 'green') => {
  element.style.backgroundColor = color;
}

ele.addEventListener( 'click', (event) => {
  pintar3(event.target, 'yellow');
});