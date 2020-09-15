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

const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    siguienteId: 1,
    buscarPorId: function(id) {
     return this.lista.findIndex(producto => id === producto.id);   
    },
    agregar: function(titulo, descripcion, precio) {
        const producto = {
            id: this.siguienteId,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
        this.siguienteId++;
    },
    borrar: function(id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validarModificacion: function(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    },
    modificar: function(id, campo, valor) {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }
};

const carrito = {
    lista: [],
    nextId: 1,
    agregar: function (id) {
        const index = catalogo.buscarPorId(id);
        if(index === -1) throw new Error("El elemento solicitado no existe.");
        // this.lista.push(catalogo.lista[index]); // se pasa por referencia. -> si modifico aca, se modifica en catalogo
        const obj = {
            id: this.nextId,
            catalogoId: catalogo.lista[index].id,
            titulo: catalogo.lista[index].titulo,
            descripcion: catalogo.lista[index].descripcion,
            precio: catalogo.lista[index].precio
        }
        this.lista.push(obj);
        this.nextId++;
    },
    borrar: function(id) {
        
    }
};


////// v2 - Fede

const carrito = {
    lista: [],
    nextId: 1,
    get total() {
        let total = 0;
        this.lista.forEach(producto => total = total + producto.precio);
        return total;
    },
    agregar: function (id) {
        const index = catalogo.buscarPorId(id);
        if(index === -1) throw new Error("El elemento solicitado no existe.");
        const obj = {
            ...catalogo.lista[index],
            id: this.nextId,
            catalogoId: catalogo.lista[index].id
        }
        this.lista.push(obj);
        this.nextId++;
    },
    borrar: function(id) {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    }
};


////// v3 - Fede - sin cantidad

/*
Reducer version original
    get total() {
        const total = this.lista.reduce((acumulador, producto) => {
            return acumulador + producto.precio;
        },0);
        return total;
    },
 */

const carrito = {
    lista: [],
    nextId: 1,
    get total() {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0); // devuelve un solo valor. el precio total
    },
    agregar: function (id) {
        const index = catalogo.buscarPorId(id);
        if(index === -1) throw new Error("El elemento solicitado no existe.");
        const obj = {
            ...catalogo.lista[index],
            id: this.nextId,
            catalogoId: catalogo.lista[index].id
        }
        this.lista.push(obj);
        this.nextId++;
    },
    borrar: function(id) {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    }
};


////// v4 - Fede - con cantidad

const carrito = {
    lista: [],
    nextId: 1,
    get total() {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0); // devuelve un solo valor. el precio total
    },
    buscarPorCatalogoId(catalogoId) {
        return this.lista.findIndex(producto => producto.catalogoId === catalogoId);
    },
    agregar: function (catalogoId, cantidad) {
        const catalogoIndex = catalogo.buscarPorId(id);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarPorCatalogoId(id);

        if (carritoIndex === -1) {
            const obj = {
                ...catalogo.lista[index],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.lista.push(obj);
            this.nextId++;
        } else {
            this.lista[carritoIndex].cantidad += cantidad;
        }
    },
    borrar: function(id) {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    }
};


////// v5 - Fede -  ULTIMA

const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    siguienteId: 1,
    buscarPorId: function(id) {
     return this.lista.findIndex(producto => id === producto.id);   
    },
    agregar: function(titulo, descripcion, precio) {
        const producto = {
            id: this.siguienteId,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
        this.siguienteId++;
    },
    borrar: function(id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validarModificacion: function(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    },
    modificar: function(id, campo, valor) {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }
};

const carrito = {
    lista: [],
    nextId: 1,
    get total() {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.precio, 0); // devuelve un solo valor. el precio total
    },
    buscarPorCatalogoId(catalogoId) {
        return this.lista.findIndex(producto => producto.catalogoId === catalogoId);
    },
    agregar: function (catalogoId, cantidad) {
        const catalogoIndex = catalogo.buscarPorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarPorCatalogoId(catalogoId);

        if (carritoIndex === -1) {
            const obj = {
                ...catalogo.lista[catalogoIndex],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.lista.push(obj);
            this.nextId++;
        } else {
            this.lista[carritoIndex].cantidad += cantidad;
        }
    },
    borrar: function(id) {
        const index = this.lista.findIndex(producto => id === producto.id);
        if(index === -1) throw new Error("El producto no existe en el carrito.");
        this.lista.splice(index, 1);
    }
};


////// v - Maria

const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    siguienteId: 1,
    buscarPorId: function (id) {
        return this.lista.findIndex(producto => id === producto.id);
    },
    agregar: function (titulo, descripcion, precio) {
        const producto = {
            id: this.siguienteId,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
        this.siguienteId++;
    },
    borrar: function (id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validarModificacion: function (index, campo) {
        if (index === -1) throw new Error("El ID seleccionado no existe.");
        if (this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido.");
    },
    modificar: function (id, campo, valor) {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor;
    }

};

const carrito = {
    lista: [],
    cargar: function(id, cantidad) {
        let index = catalogo.buscarPorId(id);
        const producto = {
            ...catalogo.lista[index],
            cantidad,
        };
        this.lista.push(producto);
    },
    borrar: function(id) {
        this.validar(id);
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validar: function(id) {
        let index = this.lista.findIndex(producto => producto.id === id); // me da un índice
        if(index < 0) throw new Error(`El producto no se encuentra en el carrito`);
    },
    get total() {
        return this.lista.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);
    }
};