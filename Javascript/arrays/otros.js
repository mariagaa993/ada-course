// https://github.com/fedm4/js-course

// Ejercicios: 

/**------------------ 1
@name isOdd
@description Devuelve si un número es impar
@param {number} x - El número a evaluar
@returns {Boolean} Devuelve true si el número {x} es impar, false sino
@example
isOdd(3) // returns true
*/

const isOdd = (x) => {
    if (x % 2 !== 0) {
        return true;
    } else {
        return false; 
    }
}
isOdd(3);


/**------------------ 2
@name inRange
@description Devuelve si un número se encuentra dentro de un rango
@param {number} x - El número a evaluar si se encuentra dentro del rango
@param {number} min - El límite inferior del rango
@param {number} max - El límite superior del rango
@returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
@example
inRange(2, -4, 10) // returns true
*/
 
const inRange = (x, min, max) => {
    if (x > min && x < max) {
        return true;
    } else {
        return false;
    }
}
inRange(2, -4, 10);


/**------------------ 3
@name getBiggestNumber
@description Devuelve el número más grande de un array
@param {number[]} numbers - Un array de números
@returns {Number} El número más grande del arrray {numbers}
@example
getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
*/ 

const getBiggestNumber = (numbers) => {
    function numbers(a, b) {
        return a - b;
      }
}
getBiggestNumber([3, 8, 2, 1, 10])


/**------------------ 4
@name getPercentage
@description Devuelve el porcentaje correspondiente de un número
@param {number} number - Número a obtener el porcentage
@param {number} percentage - Porcentaje a obtener
@returns {Number}
@example
getPercentage(200, 10) // returns 20
*/ 

const getPercentage = (number, percentage) => {
    let Number = number * percentage / 100;
    return Number;
}
getPercentage(200, 10);


/**------------------ 5
@name filterNumbersGreaterThan
@description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
@param {number[]} numbers - Array de números a filtrar
@param {number} filter - Número a partir del cuál filtrar los demás números
@returns {Number[]} - Array de números filtrados menores a {filter}
@example
filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
*/ 

const filterNumbersGreaterThan = (numbers, filter) => {
    let Number = numbers.filter(numbers => numbers < filter);
    return Number;
}
filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7);



/**------------------ 6
@name getFactorial
@description Devuelve el factorial de un número
@param {number} x - Número del cuál obtener factorial
@returns {Number} - Factorial de {x}
@example
getFactorial(4) // returns 24
*/ 

const getFactorial = (x) => {
    let Number = 1;
    for (let i = 1; i <= x; i++) {
		Number = Number * i; 
    }
    return Number;     
}
getFactorial(4);

/**------------------ 7
@name areArraysEqual
@description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
@param {[]} a 
@param {[]} b 
@returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
@example
areArraysEqual([1, 4], [1, 4]) // returns true
*/