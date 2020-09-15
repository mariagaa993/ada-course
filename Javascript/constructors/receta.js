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

// Creando instancias

function Ingredientes(ingrediente, cantidad) {
    this.ingrediente = ingrediente;
    this.cantidad = cantidad;
};

function Receta(nombre) {
    this.nombre = nombre;
    this.ingredientes = [];
    this.agregarIngredientes = (ingrediente, cantidad) => {
        const ingredientes = new Ingredientes(ingrediente, cantidad);
        this.ingredientes.push(ingredientes);
    };
    this.getReceta = () => {
        let texto = `La receta de ${this.nombre} lleva los siguientes ingredientes: `
        this.ingredientes.forEach(ingrediente => texto += `${ingrediente.cantidad} de ${ingrediente.ingrediente}, `);
        const textoFinal = texto.substr(0, texto.length - 2) + '.';
        return textoFinal;
    };
};

function CatalogoDeRecetas () {
    this.listaRecetas = [];
    this.agregar = nombre => {
        const receta = new Receta(nombre);
        this.listaRecetas.push(receta);
    };
    this.buscarRecetaPorNombre = nombre => this.listaRecetas.findIndex(receta => receta.nombre === nombre); 
    this.agregarIngredientes = (nombre, ingrediente, cantidad) => {
        const indice = this.buscarRecetaPorNombre(nombre);
        this.listaRecetas[indice].agregarIngredientes(ingrediente,cantidad);
    };
    this.verReceta = nombre  => {
        const indice = this.buscarRecetaPorNombre(nombre);
        return this.listaRecetas[indice].getReceta();
    };
};

const recetario = new CatalogoDeRecetas();