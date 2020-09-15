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

function Ingrediente(ingrediente, cantidad) {
    this.ingrediente = ingrediente;
    this.cantidad = cantidad;
};

function Receta(nombre) {
    this.nombre = nombre;
    this.ingrediente = [];
    this.agregarIngrediente = ingredientCant => {
        if(!(ingredientCant instanceof Ingrediente)) throw new Error('Debe ser de tipo Ingrediente.');
        this.ingrediente.push(ingredientCant);
    };
    this.getReceta = () => {
        let texto = `La receta de ${this.nombre} es: `
        this.ingrediente.forEach(ingrediente => `texto += ${ingrediente.cantidad} de ${ingrediente.ingrediente}, `);
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
    this.agregarIngrediente = (nombre, ingredientCant) => {
        const indice = this.buscarRecetaPorNombre(nombre);
        if(indice === -1) throw new Error("No puedes agregar ingredientes a una receta que no existe.")
        this.listaRecetas[indice].agregarIngrediente(ingredientCant);
    };
};

const receta = new Receta();
const recetario = new CatalogoDeRecetas();

test('1 Test: Crear los ingredientes', () => {
    expect(new Ingrediente("azucar", "2 tazas")).toEqual({
        ingrediente: 'azucar',
        cantidad: '2 tazas'
    });
});

test('2 Test: Buscando por nombre', () => {
    recetario.agregar("Cake");
    expect(recetario.buscarRecetaPorNombre("Cake")).toBe(0);
});

describe('3 Test: Agregando', () => {
    test('3.1 Test: Ingrediente en instancia Receta', () => {
        receta.agregarIngrediente(new Ingrediente("azucar", "2 tazas"))
        expect(receta.ingrediente.length).toBe(1);
    });
    test('3.2 Test: Nombre de receta', () => {
        recetario.agregar("Pie de limon");
        recetario.agregar("Cupcake");
        expect(recetario.listaRecetas.length).toBe(3);
    });
    test('3.3 Test: Ingrediente desde instancia CatalogoDeRecetas', () => {
        recetario.agregarIngrediente('Cupcake', new Ingrediente("azucar", "2 tazas"));
        recetario.agregarIngrediente('Cupcake', new Ingrediente("harina", "3 tazas"));
        expect(recetario.listaRecetas[2].ingrediente[1]).toEqual({
            ingrediente: 'harina',
            cantidad: '3 tazas'
        });
    });
});

describe('4 Test: Probando errores', () => {
    test("4.1 Test: Debe ser de tipo Ingrediente", () => {
        const agregarIngrediente = {
            ingrediente: 'azucar',
            cantidad: '2 tazas'
        }; 
        expect(() => receta.agregarIngrediente(agregarIngrediente)).toThrow("Debe ser de tipo Ingrediente.");
    });
    test("4.2 Test: Cuando no existe la receta", () => {
        expect(() => recetario.agregarIngrediente('Ice cream', new Ingrediente("harina", "3 tazas"))).toThrow("No puedes agregar ingredientes a una receta que no existe.");
    });
});