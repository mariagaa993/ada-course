// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Hacer una serie de funciones para un TODO list.
Que me permita cargar una tarea, con un titulo, 
descripcion de tarea, y si fue hecha o no, con un 
valor default.
Me tiene que permitir agregar tareas,
editar y eliminar. Además debería poder listar
las tareas permitiendome filtrar por
si fueron resueltas o no, pero sin ser obligatorio.
Por cada funcion que haga, primero empiezo por 
el test, y luego por la funcion.
Observaciones: Pensar en ejercicio integrador de 
cargar personas.
*/

/// Qué espero?
{
    task: [
        {titulo: "cocina", descripcion: "hoy haré pollo", estado: false},
        {titulo: "comprar", descripcion: "ir al mall", estado: true},
    ];
}

function Task (titulo, descripcion, estado = false) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
}

function ToDoList () {
    this.task = [];
    this.camposValidos = ["titulo", "descripcion", "estado"];
    this.agregar = (titulo, descripcion, estado) => {
        this.validarTarea(titulo);
        const tarea = new Task(titulo, descripcion, estado);
        this.task.push(tarea);
    };
    this.validarTarea = titulo => {
        const buscarTask = this.buscarTarea(titulo);
        if(buscarTask >= 0) throw new Error("La tarea ya esta registrada.");
    };
    this.buscarTarea = titulo => this.task.findIndex(t => titulo === t.titulo);
    this.campoEditar = (campo) => {
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    };
    this.editar = (titulo, campo, nuevoValor) => {
        const index = this.buscarTarea(titulo);
        this.campoEditar(campo);
        this.task[index][campo] = nuevoValor;
    };
    this.eliminar = tituloTarea => {
        this.task = this.task.filter(tarea => tarea.titulo !== tituloTarea);
    };
}

let list;
beforeEach(() => list = new ToDoList());

test("1 Test: Probando función agregar", () => {
    list.agregar('cocinar', 'hoy haré pasticho', true);
    expect(list.task[0]).toEqual({
        titulo: 'cocinar',
        descripcion: 'hoy haré pasticho',
        estado: true,
    });
});

test("2 Test: Probando función editar", () => {
    list.agregar('cocinar', 'hoy haré pasticho', true);
    list.editar('cocinar', 'descripcion', 'mentira, hoy haré pollo');
    expect(list.task[0]).toEqual({
        titulo: 'cocinar',
        descripcion: 'mentira, hoy haré pollo',
        estado: true
    });
});

test("3 Test: Probando función eliminar", () => {
    list.agregar('cocinar', 'hoy haré pasticho', true);
    list.eliminar('cocinar');
    expect(list.task).toEqual([]); 
});

test("4 Test: Verificando el error cuando la tarea ya existe", () => {
    list.agregar('cocinar', 'hoy haré pasticho', true);
    expect(() => list.validarTarea("cocinar")).toThrow("La tarea ya esta registrada.");
});

test("5 Test: Validando las propiedades del objeto tarea", () => {
    expect(() => list.campoEditar("title")).toThrow("El campo seleccionado no es valido.");
});