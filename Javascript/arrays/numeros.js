// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un programa que pida ingresar números separados por espacios y devuelva un 
mensaje con el menor número ingresado. Ejemplo:
Ingrese números: 5 7 99 34 54 2 12
El menor número es: 2
*/

let numeros = [5, 1, 89, 150, 90, 200, 180];
const reducir = () => {
  return numeros.reduce((acumulador, numero) => acumulador > numero ? numero : acumulador);
}
reducir();