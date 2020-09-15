// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
*/

let numeros = [5, 1, 89, 150, 90, 200, 180];
const reducir = () => {
  return numeros.reduce((acumulador, numero) => acumulador < numero ? numero : acumulador);
}
reducir();