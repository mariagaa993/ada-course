// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Crear un programa que pregunte al usuario cuántos kilos de 
helado va a comprar y mostrar en un mensaje la cantidad de sabores 
disponibles según la opción elegida. Opciones:
    1/4kg  : 2 sabores.
    1/2 kg : 3 sabores.
    3/4kg  : 4 sabores.
    1kg    : 5 sabores. 
*/

let iceCreamWeight = prompt("How many kg of ice cream are you going to buy?", "example: 1/4kg");
let weight = {
    "1/4kg" : 2,
    "1/2kg" : 3,
    "3/4kg" : 4,
    "1kg"   : 5
}

let result = weight[iceCreamWeight] ? `For 1/4kg, we have ${weight[iceCreamWeight]} flavors of ice cream available.`
: `We don't sell more than 1kg, sorry!`;
alert(result);

// ------------------------------- or

let iceCreamWeight = prompt("How many kg of ice cream are you going to buy?", "example: 1/4kg");
let quarterKg = 2;
let halfKg = 3;
let threeQtrsKg = 4;
let oneKg = 5;

if (iceCreamWeight === "1/4kg") {
	alert(`For 1/4kg, we have ${quarterKg} flavors of ice cream available.`);
    } 
    else if (iceCreamWeight === "1/2kg") {
	alert(`For 1/2kg, we have ${halfKg} flavors of ice cream available.`);
	}
    else if (iceCreamWeight === "3/4kg") {
	alert(`For 3/4kg, we have ${threeQtrsKg} flavors of ice cream available.`);
	}
    else if(iceCreamWeight === "1kg") {
	alert(`For 1kg, we have ${oneKg} flavors of ice cream available.`);	
	}
    else{
	alert(`We don't sell more than 1kg, sorry!`); 
}