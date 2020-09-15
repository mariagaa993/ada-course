// https://github.com/fedm4/js-course

// Ejercicios: 

/* ------------------------------- 
Crear un programa que pida al usuario ingresar 
un número y mostrar en un mensaje si el valor ingresado es par o impar. 
*/

let number = parseInt(prompt("Enter a number to find out if it is odd or even", "Number"));

if (number % 2 === 0) {
    alert(`The number ${number} is odd`);
} else {
    alert(`The number ${number} is even`);
}

// ------------------------------- or 

let number = parseInt(prompt("Enter a number to find out if it is odd or even", "Number"));

let result = number % 2 === 0 ? `The number ${number} is odd` 
: `The number ${number} is even`;
alert(result);

