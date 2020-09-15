let mesas = [];
let productos = [];

const  validacionDeMesa = mesa => {
    if (!(mesa instanceof Mesa)) throw new Error("No pertenece a una instacia de mesa");
    const buscarNroDeMesa = mesas.findIndex(mesita => mesita.nroMesa === mesa.nroMesa);
    if (buscarNroDeMesa !== -1) throw new Error("La mesa ya esta cargada"); 
};

const  validacionDeProducto = producto => {
    if (!(producto instanceof Producto)) throw new Error("No pertenece a una instacia de producto");
    const buscarProducto = productos.findIndex(elemento => elemento.producto === producto.producto);
    if (buscarProducto !== -1) throw new Error("El producto ya esta cargado"); 
};

class Mesa {
    constructor(nroMesa) {
        this.nroMesa = Number(nroMesa);
        if (isNaN(this.nroMesa)) throw new Error("No es un número");
        this.cuenta = new Cuenta();
    };
    eliminarMesa() {
        mesas = mesas.filter(mesa => {
            return mesa.nroMesa !== this.nroMesa
        });
    };
};

class Producto {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    };
    eliminarProducto() {
        productos = productos.filter(producto => {
            return producto.id !== this.id
        });
    }
};

class Cuenta {
    constructor() {
        this.nextId =1;
        this.ListadeProducto = [];
    };
    agregar(idProducto, cantidad) { 
        productos.forEach(producto => {
            if (producto.id == idProducto) {
                this.ListadeProducto.push({ id: this.nextId, producto, cantidad })
                this.nextId++;
            };
        });
    };
    eliminarConsumicion(id) {
        this.ListadeProducto = this.ListadeProducto.filter(producto => {
        return producto.id !== id;
        });
    };
};


/// --- PRIMERA TABLA
const agregarMesa = _ => {
    const input = document.querySelector("#nroMesa").value;
    const tbody = document.querySelector("#tbody-1");   
    const mesa = new Mesa(input);
    validacionDeMesa(mesa);
    mesas.push(mesa);
    
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const btnCerrarMesa = document.createElement("button");
    btnCerrarMesa.type = "button";
    btnCerrarMesa.className = "btnCerrarMesa";

    btnCerrarMesa.innerText = "Cerrar";
    td1.innerText = mesa.nroMesa;
    td2.classList.add("agregarTotalCuenta");
    td2.id = "cuenta-" + mesa.nroMesa;
    td2.innerText = "0";

    td3.appendChild(btnCerrarMesa);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);

    document.querySelector("#nroMesa").value = "";
    
    const borrar = event => {
        const eliminar = event.target.parentElement.parentElement;
        mesa.eliminarMesa();
        eliminar.remove();
        actualizarSelect();
        actualizarSelectDetalle();
    };
    btnCerrarMesa.addEventListener("click", borrar);

    actualizarSelect();
    actualizarSelectDetalle();
};


/// --- SEGUNDA TABLA
let id = 1;
const agregarProductos = _ => {
    const input2 = document.querySelector("#producto").value;
    const input3 = document.querySelector("#precio").value;
    const producto = new Producto(id, input2, input3);
    validacionDeProducto(producto);
    productos.push(producto);

    const tbody = document.querySelector("#tbody-2");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const btnEliminarProducto = document.createElement("button");
    btnEliminarProducto.type = "button";
    btnEliminarProducto.className = "btnEliminarProducto";

    btnEliminarProducto.innerText = "Eliminar";
    td1.innerText = id++;
    td2.innerText = input2;
    td3.innerText = input3;

    td4.appendChild(btnEliminarProducto);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);

    document.querySelector("#producto").value = "";
    document.querySelector("#precio").value = "";
    
    const borrar = event => {
        const eliminar = event.target.parentElement.parentElement;
        producto.eliminarProducto();
        eliminar.remove();
    };
    btnEliminarProducto.addEventListener("click", borrar);

    cargarProductosAMesa();
};


/// --- TERCERA TABLA
const cargarProductosAMesa = _ => {
    const tbody = document.querySelector("#tbody-3");
    tbody.innerHTML = "";
    for (let producto of productos) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const input = document.createElement("input");
        input.classList.add("agregarCantidad");
        input.id = "inputproducto-" + producto.id;
        input.placeholder = "Cantidad";
        input.type = "number";
      
        td2.appendChild(input);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);

        td1.innerText = producto.producto;
        td1.value = producto.producto;
    };
};


/// --- METODO CALCULAR CUENTA
const calcularCuenta = mesa => {
    document.querySelectorAll(".agregarTotalCuenta").forEach(cuentaTd => {
        const idCuenta = cuentaTd.id.split("-")[1];
        if (selectedOption == idCuenta) {
            const cuentaTotal = mesa.cuenta.ListadeProducto.reduce((acc, producto) => acc + producto.producto.precio * producto.cantidad, 0);
            cuentaTd.innerText = cuentaTotal;
        }
    });
};


/// --- METODO CARGAR PRODUCTOS
const cargarProductos = _ => {
    document.querySelectorAll(".agregarCantidad").forEach(productoInput => {
        const idProducto = productoInput.id.split("-")[1]; 
        const productoCantidad = Number(productoInput.value);
        if (productoCantidad) {
            mesas.forEach(mesa => {
                if (mesa.nroMesa == selectedOption) {
                    mesa.cuenta.agregar(idProducto, productoCantidad);
                    calcularCuenta(mesa);
                };
            });
        };
    });
};


/// --- METODO PRIMER SELECT
let selectedOption;
const actualizarSelect = _ => {
    const select = document.querySelector("#NroMesaDropDown");
    select.innerHTML = "";
    const defaultOption = document.createElement("option")
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.innerText = "Nro de Mesa";
    select.appendChild(defaultOption);
    
    for (let mesa of mesas) { 
        const option = document.createElement("option");
        select.appendChild(option);
        option.innerText = mesa.nroMesa;
        option.value = mesa.nroMesa;
    }
    
    select.addEventListener('change', _ => {
        selectedOption = select.options[select.selectedIndex].value;
    });
};


/// --- METODO SEGUNDO SELECT
let selectedOptionDetalle;
const actualizarSelectDetalle = _ => {
    const select = document.querySelector("#NroMesaCompleta");
    select.innerHTML = "";
    const defaultOption = document.createElement("option")
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.innerText = "Nro de Mesa";
    select.appendChild(defaultOption);
    for (let mesa of mesas) {
        const option = document.createElement("option");
        select.appendChild(option);
        option.innerText = mesa.nroMesa;
        option.value = mesa.nroMesa;
    };
};


/// --- CUARTA TABLA
const detalleDeMesa = _ => {
    const selectDetalle = document.querySelector("#NroMesaCompleta");
    const tbody = document.querySelector("#tbody-4");
    tbody.innerHTML = "";
    mesas.forEach(mesa => {
        if (selectDetalle.value == mesa.nroMesa) {
        mesa.cuenta.ListadeProducto.forEach(producto => {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");
            const btnLimpiarCuenta = document.createElement("button");
            btnLimpiarCuenta.type = "button";
            btnLimpiarCuenta.className = "btnLimpiarCuenta";

            btnLimpiarCuenta.innerText = "Limpiar";
            td1.innerText = producto.producto.producto;
            td2.innerText = producto.cantidad;
            td3.innerText = producto.producto.precio;

            td4.appendChild(btnLimpiarCuenta);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);

            const limpiarCuenta = _ => {
                const limpiar = btnLimpiarCuenta.parentElement.parentElement;
                mesa.cuenta.eliminarConsumicion(producto.id);
                limpiar.remove();
                calcularCuenta(mesa);
            };
            btnLimpiarCuenta.addEventListener("click", limpiarCuenta);
            });
        };
    });
};


/// --- METODO PRINCIPAL
const load = _ => {
    const button = document.querySelector(".agregarMesa");
    button.addEventListener("click", agregarMesa);

    //BOTON ACEPTAR CON ENTER agregar mesa
    const input = document.querySelector("#nroMesa")
    input.addEventListener("keypress", event => {
        if (event.keyCode === 13) {
            agregarMesa();
        };
    });
    const button2 = document.querySelector(".agregarProducto");
    button2.addEventListener("click", agregarProductos);

   // Hacer al INPUT //
   document.querySelector("#precio").addEventListener("keydown", event => {
        if (event.keyCode === 13) { 
            agregarProductos(); 
        };
    });

    const button3 = document.querySelector(".agregarAmesa");
    button3.addEventListener("click", cargarProductos);
    document.querySelector("#NroMesaDropDown").addEventListener("keydown", event => {
        if (event.keyCode === 13) {
            cargarProductos(); 
        };
    });

    const selectDetalle = document.querySelector("#NroMesaCompleta");
    selectDetalle.addEventListener("change", detalleDeMesa);
};