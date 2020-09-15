// https://github.com/fedm4/js-course

// Ejercicio: 

// ------------------------------- 

// Variables Globales
let unidades;
let total;
let tdc;
let fee;
let cuotaSinInteres;
let cuotaConInteres;
let discount;
let discountRate = 0.10;
let totalDiscount;
let code;
let initialWord;

// Diccionarios
let interest = {
    3  : 0.05,
    6  : 0.12,
    12 : 0.25
}

let product = {
    "Fresa" : 5,
    "Limon" : 8
}

// Bienvenida al cliente
const customer = prompt("Bienvenido/a! Me podría decir su nombre?");
const user = customer === "" || !isNaN (customer) ? 
prompt("Por favor, dígame su nombre o no ingrese valores invalidos.") : `${customer}`;
alert(`Excelente, ${user}! Hoy tenemos dos frutas en promoción: \n 1. Fresa \n 2. Limon`);


// Escoger producto
const buy = prompt("Cuál de los dos productos en promoción deseas?"); 
 
// Este if es para verificar que el producto que me ingresa el cliente esta entre las opciones
if (product[buy]) {
    // Este if es para que aparezca el pronombre de cada producto
    if (Object.keys(product)[0] === buy) {
        initialWord = "La " + buy;
    } else if (Object.keys(product)[1] === buy) {
        initialWord = "El " + buy;
    }
// Esta función es para no reescribir el código dependiendo del tipo de producto
miFuncion(product[buy]);
} else {
    alert(`No se preocupe, ${customer || user}! Que tenga un buen día.`)
}

function miFuncion(productPrice) {
    unidades = parseInt(prompt("Maravilloso! Cuántas unidades te gustaría llevar?"));        
    total = unidades * productPrice;
        alert(`A continuación le muestro el detalle de su compra: 
        ${initialWord} x unidad tiene un costo de $${productPrice}.
        Usted esta comprando ${unidades} por lo que el total a pagar serían $${total}.`);
    
    // Tdc para abonar
    tdc = prompt("Desea abonar con tarjeta de crédito");
    if (tdc === "si") {
        fee = parseInt(prompt("En cuantas cuotas deseas abonar? Disponemos de 3 opciones: \n a. 3 Cuotas = cuotaSinInteres del 5% \n b. 6 Cuotas = cuotaSinInteres del 10% \n c. 12 Cuotas = cuotaSinInteres del 25%"));
        if (interest[fee]) {
            cuotaSinInteres = total / fee;
            cuotaConInteres = cuotaSinInteres * interest[fee] + cuotaSinInteres;
                alert(`Nuevo detalle de su compra: 
                ${initialWord} x unidad tiene un costo de $${productPrice}.
                Usted esta comprando ${unidades} por lo que el total a pagar serían $${total}.
                Ahora, usted decidio pagarlo en ${fee} cuotas las cuales 
                tendrán un interés del ${interest[fee]*100}% por lo que cada 
                cuota le sale en $${cuotaConInteres}.`);
            
            // Descuento
            discount = prompt("Ahora, tienes algún código de descuento?");
            if (discount === "si") {
                code = prompt("Por favor ingrese su código");
                if (code === "b1234") {
                    alert(`El código ingresado es correcto. Ahora veamos su nueva factura.`);
                    discountRate = 0.20;
                    totalDiscount = cuotaConInteres - (cuotaConInteres * discountRate);
                    alert(`Detalle de su compra pagando en cuotas y obteniendo descuento:
                    ${initialWord} x unidad tiene un costo de $${productPrice}.
                    Usted esta comprando ${unidades} por lo que el total a pagar serían $${total}.
                    Ahora, usted decidio pagarlo en ${fee} cuotas la cual tiene un 
                    interés de ${interest[fee]*100}% por lo que cada cuota
                    le sale en $${cuotaConInteres}, pero gracias a su código de
                    descuento tiene un -${discountRate*100}% por lo que su total 
                    SOLO valido para su primera cuota es de ${totalDiscount}, las otras 
                    cuotas le quedan en $${cuotaConInteres}.`);
                    alert ("Muchas gracias por su compra, vuelva pronto!")
                } else {
                    alert(`El código ingresado es incorrecto. No tiene descuento!
                    PAGUEME LAS CUOTAS COMPLETAS: $${cuotaConInteres} c/a y gracias por su compra!`);
                }
            } else {
                alert(`Entonces, pague las cuotas como acordamos: $${cuotaConInteres} c/a y gracias por su compra!`);
            }

        // En caso de equivocarse en el número de cuotas  
        } else {                    
            discount = prompt("No aceptamos ese número de cuotas. Tienes algún código de descuento?");
            if (discount === "si") {
                code = prompt("Por favor ingrese su código");
                if (code === "a1234") {
                    alert(`El código ingresado es correcto. Ahora veamos su nueva factura.`);
                    totalDiscount = total - (total * discountRate);
                    alert(`Nuevo detalle de su compra:
                    ${initialWord} x unidad tiene un costo de $${productPrice}.
                    Usted esta comprando ${unidades} por lo que el total a pagar serían $${total}. 
                    Ahora, gracias a su código de descuento tiene un -${discountRate*100}%
                    por lo que su total es de $${totalDiscount}.`);
                    alert ("Muchas gracias por su compra, vuelva pronto!")
                } else {
                    alert(`El código ingresado es incorrecto. No tiene descuento!
                    PAGUEME TODO COMPLETO: $${total} y gracias por su compra!`);
                }
            } else {
                alert(`Entonces, pague como acordamos: $${total} y gracias por su compra!`)
            }
        }

    // En caso de no querer pagar en cuotas
    } else { 
        discount = prompt("Tienes algún código de descuento?");
        if (discount === "si") {
            code = prompt("Por favor ingrese su código");
            if (code === "a1234") {
                alert(`El código ingresado es correcto. Ahora veamos su nueva factura.`);
                totalDiscount = total - (total * discountRate);
                alert(`Nuevo detalle de su compra:
                ${initialWord} x unidad tiene un costo de $${productPrice}.
                Usted esta comprando ${unidades} por lo que el total a pagar serían $${total}. 
                Ahora, gracias a su código de descuento tiene un -${discountRate*100}%
                por lo que su total es de $${totalDiscount}.`);
                alert ("Muchas gracias por su compra, vuelva pronto!")
                } else {
                alert(`El código ingresado es incorrecto. No tiene descuento!
                PAGUEME TODO COMPLETO: $${total} y gracias por su compra!`);
            }
        } else {
            alert(`Entonces, pague como acordamos: $${total} y gracias por su compra!`)
        }
    }
}