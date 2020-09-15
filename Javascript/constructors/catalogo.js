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

////// v1 - Fede

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
        const catalogoIndex = catalogoProductos.buscarPorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarPorCatalogoId(catalogoId);

        if (carritoIndex === -1) {
            const obj = {
                ...catalogoProductos.lista[catalogoIndex],
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

let catalogoProductos = new Catalogo();
const catalogoCarrito = new Carrito();