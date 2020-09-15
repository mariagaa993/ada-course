// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Hacer un programa que nos permita 
cargar/modificar/borrar un catalogo de 
productos (deberían tener "id", como identificador 
único de número, por ej: 1, 2, 3.; título, descripción
de producto y precio (float)).
 
Además de esto vamos a necesitar un carrito de compras
que nos permita cargar/borrar productos de 
nuestro carrito, sumar el precio total de los elementos
de nuestro carrito. 
*/

function Producto(id, titulo, descripcion, precio) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
};

function Catalogo () {
    this.lista = [];
    this.camposValidos = ["titulo", "descripcion", "precio"];
    this.siguienteId = 1;
    this.buscarPorId = id => {
        return this.lista.findIndex(producto => id === producto.id);
    };
    this.agregar = (titulo, descripcion, precio) => {
        const producto = new Producto(
            this.siguienteId,
            titulo, 
            descripcion, 
            precio
        );
        this.lista.push(producto);
        this.siguienteId++;
    };
    this.borrar = id => {
        this.lista = this.lista.filter(producto => producto.id !== id);
    }
    this.validarModificacion = (index, campo) => {
        if(index === -1) throw new Error ('El ID seleccionado no existe.');
        if(this.camposValidos.indexOf(campo) === -1) throw new Error ('El campo seleccionado no es valido.');
    };
    this.modificar = (id, campo, valor) => {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor;
    };
};

function Carrito () {
    this.lista = [];
    this.nextId = 1,
    this.buscarPorCatalogoId = catalogoId => {
        return this.lista.findIndex(producto => producto.catalogoId === catalogoId);
    };
    this.agregar = (catalogoId, cantidad) => {
        const catalogoIndex = catalogoProducto.buscarPorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarPorCatalogoId(catalogoId);

        if (carritoIndex === -1) {
            const obj = {
                ...catalogoProducto.lista[catalogoIndex],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.lista.push(obj);
            this.nextId++;
        } else {
            this.lista[carritoIndex].cantidad += cantidad;
        }
    };
    this.borrar = id => {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    };
    this.getTotal = () => {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0); // devuelve un solo valor. el precio total
    };
};

let catalogoProducto = new Catalogo();
const catalogoCarrito = new Carrito();

////////// Catalogo

beforeEach(() => {
    catalogoProducto.lista = [];
    catalogoProducto.siguienteId = 1;
    catalogoProducto.agregar("jabon", "cremoso", 50);
    catalogoProducto.agregar("shampoo", "control caida", 125);

    catalogoCarrito.lista = [];
    catalogoCarrito.nextId = 1;
    catalogoCarrito.agregar(1, 2);
});

test('1 Test: Creación de producto', () => {
    const producto = new Producto(1, "Chocolate", "Rico chocolate", 5);
    expect(producto).toEqual({
        id: 1,
        titulo: "Chocolate",
        descripcion: "Rico chocolate",
        precio: 5
    });
});

test('2 Test: Probando el método modificar', () => {
    catalogoProducto.modificar(1, "titulo", "Caramelo");
    expect(catalogoProducto.lista[0]).toEqual({
        id: 1,
        titulo: "Caramelo",
        descripcion: "cremoso",
        precio: 50
    });
});

test('3 Test: Obtener total a pagar por los productos', () => {
    expect(catalogoCarrito.getTotal()).toBe(100);
});

describe('4 Test: Probando agregar producto al catalogo y al carrito ', () => {
    afterEach(() => { // con el beforeEach me suma lo que tengo afuera más lo que coloque aquí.
        // Otra cosa, sin esto me funciona. Cómo y/o cuándo debería hacer esto? 
        catalogoProducto.agregar("jabon", "cremoso", 50);
        catalogoProducto.agregar("shampoo", "control caida", 125);
        catalogoCarrito.agregar(1, 2);
    });
    test('4.1 Test: Catalogo', () => {
        expect(catalogoProducto.lista.length).toBe(2);
    });
    test('4.2 Test: Carrito', () => {
        expect(catalogoCarrito.lista.length).toBe(1);
    });
});

describe('5 Test: Probando si el id catalogo y id carrito aumenta correctamente', () => {
    test('5.1 Test: Catalogo', () => {
        expect(catalogoProducto.lista[1]).toEqual({
            id: 2,
            titulo: "shampoo",
            descripcion: "control caida",
            precio: 125
        });
    });
    test('5.2 Test: Carrito', () => {
        expect(catalogoCarrito.lista[0]).toEqual({
            id: 1,
            titulo: "jabon",
            descripcion: "cremoso",
            precio: 50, 
            catalogoId: 1,
            cantidad: 2
        });
    });
});

describe('6 Test: Probando busqueda de id catalogo y id carrito', () => {
    test('6.1 Test: Catalogo', () => {
        expect(catalogoProducto.buscarPorId(2)).toBe(1);
    });
    test('6.2 Test: Carrito', () => {
        expect(catalogoCarrito.buscarPorCatalogoId(1)).toBe(0);
    });
});

describe('7 Test: Probando borrar producto en catalogo y carrito', () => {
    test('7.1 Test: Catalogo', () => {
        catalogoProducto.borrar(1);
        expect(catalogoProducto.lista.length).toBe(1);
    });
    test('7.2 Test: Carrito', () => {
        catalogoCarrito.borrar(1);
        expect(catalogoCarrito.lista.length).toBe(0);
    });
});

describe('8 Test: Testeando errores de validarModificacion', () => {
    test('8.1 Test: El id no existe', () => {
        expect(() => catalogoProducto.modificar(20, "titulo")).toThrow('El ID seleccionado no existe.');
    });
    test('8.2 Test: El campo seleccionado no es válido', () => {
        expect(() => catalogoProducto.modificar(2, "title")).toThrow('El campo seleccionado no es valido.');
    });
});