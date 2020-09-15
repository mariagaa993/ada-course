// https://github.com/fedm4/js-course

// Ejercicio: 

/* ------------------------------- 
Crear un programa que pida por un mes y devuelva la cantidad de 
días que ese mes tiene. 
*/

let month = prompt("Know how many days your favorite month has", "Enter month");
let months = {
    "January"   : 31,
    "Febraury"  : 28,
    "March"     : 31,
    "April"     : 30,
    "May"       : 31,
    "June"      : 30,
    "July"      : 31,
    "August"    : 31,
    "September" : 30,
    "October"   : 31,
    "November"  : 30,
    "December"  : 31
}

const result = months[month] ? `Your favorite month (${month}) has ${months[month]} days, GREAT!`
: `ERROR! The entered isn't a month.`;
alert(result);

// ------------------------------- or

let month = prompt("Know how many days your favorite month has", "Enter month");
let months = {
    "January"   : 31,
    "Febraury"  : 28,
    "March"     : 31,
    "April"     : 30,
    "May"       : 31,
    "June"      : 30,
    "July"      : 31,
    "August"    : 31,
    "September" : 30,
    "October"   : 31,
    "November"  : 30,
    "December"  : 31
}
 
 if (months[month]) {
    alert(`Your favorite month (${month}) has ${months[month]} days, GREAT!`);
    month = prompt("Would you like to know the days of another month?");
        if (month === "yes") {
            month = prompt("What is the next month?", "Enter month");
            if (months[month]) {
                alert(`Your next month (${month}) has ${months[month]} days, WONDERFUL!`);
            } else {
                alert(`ERROR! The entered isn't a month.`);
            } 
        } else if (month === "no") { 
            alert("Not annoy you anymore!")
        } else if (month !== "yes" || pregunta !== "no"  ) { 
            alert("Stop annoying me!")
        } 
    } else {
        alert(`ERROR! The entered isn't a month.`);
}