// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Declarar una variable llamada concreteAndGold y asignarle un array vacio []
Agregar al array las siguientes canciones:
T-Shirt
Run
Make It Right
The Sky Is a Neighborhood
La Dee Da
Dirty Water
Arrows
appy Ever After (Zero Hour)
Sunday Rain
The Line
Concrete and Gold 
No se puede utilizar índices numéricos
Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
Los elementos tienen que guardarse en el mismo orden que se van ingresando
Mostrar en consola la primera y última canción
Mostrar en consola el contenido del array
Resultado esperado:
*/
/*"T-Shirt"
"Concrete and Gold"
[
    "T-Shirt",
    "Run",
    "Make It Right",
    "The Sky Is a Neighborhood",
    "La Dee Da",
    "Dirty Water",
    "Arrows",
    "Happy Ever After (Zero Hour)",
    "Sunday Rain",
    "The Line",
    "Concrete and Gold"
]
*/

const concreteAndGold = [];

concreteAndGold.push(
"T-Shirt",
"Run", 
"Make It Right",
"The Sky Is a Neighborhood",
"La Dee Da",
"Dirty Water",
"Arrows",
"Happy Ever After (Zero Hour)",
"Sunday Rain",
"The Line",
"Concrete and Gold");

const eliminado1 = concreteAndGold.shift()
console.log(eliminado1); 

const eliminado2 = concreteAndGold.pop()
console.log(eliminado2); 

concreteAndGold.unshift(eliminado1);
concreteAndGold.push(eliminado2);

console.log(concreteAndGold);