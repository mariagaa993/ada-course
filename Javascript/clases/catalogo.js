class Producto {
    constructor(marca, precio) {
        this.marca = marca;
        this.precio = precio;
    };
};

class Chocolate extends Producto {
    constructor(marca, precio, porcentaje, tipo, extras) {
        super(marca, precio);
        this.porcentaje = porcentaje;
        this.tipo = tipo;
        this.extras = extras;
        this.leche = true;
    };
};

class Perfume extends Producto {
    constructor(marca, precio, aroma) {
        super(marca, precio);
        this.aroma = aroma;
    };
};

class Auriculares extends Producto {
    constructor(marca, precio, wireless = false, tipo = false) {
        super(marca, precio);
        this.wireless = wireless;
        this.tipo = tipo;
    };
};

class Catalogo {
    lista = [];
    camposValidos = ["titulo", "descripcion", "precio"];
    id = 1;
    constructor(nombre) {
        this.nombre = nombre;
    }
    agregar(producto) {
        if(!(producto instanceof Producto)) throw new Error("Debe ser instancia de Producto");
        producto.id = this.id;
        this.lista.push(producto);
        this.id++;
    };
    buscarPorId(id) {
        const producto = this.lista.findIndex(producto => producto.id === id);
        return this.lista[producto];
    };
    agregarDescuento(id, porcentaje) {
        const producto = this.buscarPorId(id); 
        if(producto === -1) throw new Error("El producto no existe!");
        producto.precio *= (1 - (porcentaje / 100));
        console.log(`El descuento al producto se realizo exitosamente.`);  
        // o simplemente return producto.precio *= (1 - (porcentaje / 100));    
    };
    borrar(id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    }
    validarModificacion(index, campo) {
        if(index === -1) throw new Error ('El ID seleccionado no existe.');
        if(this.camposValidos.indexOf(campo) === -1) throw new Error ('El campo seleccionado no es valido.');
    };
    modificar(id, campo, valor) {
        const producto = this.buscarPorId(id);
        this.validarModificacion(producto, campo);
        producto[campo] = valor;
        console.log(`Modificación del campo ${campo} exitosa.`);
    };
    mostrar() {
        this.lista.forEach(producto => {
            if(producto instanceof Chocolate) {
                console.log(`Producto: ${producto.marca}. Precio: $${producto.precio}. Otras características: ${producto.porcentaje}, ${producto.tipo}, ${producto.extras}`);
            } else if(producto instanceof Perfume) {
                console.log(`Producto: ${producto.marca}. Precio: $${producto.precio}. Otras características: ${producto.aroma}.`);
            } else if(producto instanceof Auriculares) {
                console.log(`Producto: ${producto.marca}. Precio: $${producto.precio}.`);
            } else {
                console.log("Instancia inválida.")
            };
        });    
    };
};

class Carrito {
    lista = [];
    nextId = 1;
    buscarPorId(id) {
        return this.lista.findIndex(lista => lista.idCarrito === id);
    }
    agregar(producto, cantidad) {
        const carritoIndex = this.buscarPorId(producto.idCarrito);
        console.log(carritoIndex);
        if(carritoIndex === -1) {
            producto.idCarrito = this.nextId; 
            producto.cantidad = cantidad;
            this.lista.push(producto);    
            this.nextId++;  
            console.log("El producto se agrego exitosamente en el carrito.")
        } else {
            producto.cantidad += cantidad;
            console.log("Compro más cantidad de un producto existente en el carrito.")
        }
    };
    borrar(id) {
        const index = this.buscarPorId(id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    };
    total(descuento) {
        if(descuento > 0) {
            return this.lista.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0) * descuento;
        } else {
            return this.lista.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);
        }
    };
    mostrar() {
        this.lista.forEach(producto => console.log(`Producto: ${producto.marca}. Precio: $${producto.precio}c/u y vos compraste ${producto.cantidad}.`));
    };
};

class Cupon {
    descuento(descuento) {
        return 1 - (descuento / 100);
    }
}
let cupon = new Cupon();

// probarlo 
const catalogo = new Catalogo("Maria");
catalogo.agregar(new Chocolate("savoy", 100, "99%", "en barra", "mani"));
catalogo.agregar(new Perfume("tommy", 580, "flores"));
catalogo.agregar(new Auriculares("JBL", 250, true));
const carrito = new Carrito();
carrito.agregar(catalogo.buscarPorId(2), 10);
carrito.agregar(catalogo.buscarPorId(2), 15); // suma 15 a la cantidad anterior (10);
carrito.total(cupon.descuento()); // vacio ó 0 si la persona no tiene cupon.
carrito.total(cupon.descuento(50)); // la persona tiene un cupon de 50% de descuento.