// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Crear un objeto "receta" que tenga una lista 
de ingredientes con su cantidad, y un 
metodo que muestre un texto de 
las cantidades. Por ejemplo:
La receta <nombre> lleva 2 tazas de harina,
gramos de levadura, etc...
*/

///// v - Fede

const receta = {
    nombre: 'pancakes',
    ingredientes: [
        {cantidad: '2', ingrediente: 'huevos'},
        {cantidad: 'una taza', ingrediente: 'harina'},
        {cantidad: 'una taza', ingrediente: 'leche'}
    ],
    get receta() {
        let texto = `La receta de ${this.nombre} es: `;
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}, `);
        const textoFinal = texto.substr(0, texto.length - 2) + '.';
        return textoFinal;
    }
};

// JSON
// JavaScript Object Notation 


///// v - Maria

const receta = {
    postre: "Pie de Limón",
    ingredientes: [
        {cantidad: "6 unidades", ingrediente: "limones"},
        {cantidad: "1 paquete", ingrediente: "galletas"},
        {cantidad: "4 unidades", ingrediente: "huevos"},
        {cantidad: "1 taza", ingrediente: "azucar"},
        {cantidad: "5 cucharadas", ingrediente: "mantequilla"},
    ],
    get mostrar() {
        let texto = `La receta de ${this.postre} es:`;
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}`);
    }
};