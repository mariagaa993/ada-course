// 001 
/**
 * Crear un TODO list (ul li), que tenga
 * 1. un input para agregar nuevos TODO
 * 2. Este input debe tener un button (type="button") para poder
 *    agregar el TODO desde el input 
 * 3. un button por cada TODO de la lista
 *  para borrar el mismo. (event.target y parentElement)
 * 4. Un checkbox, antes del texto de cada TODO,
 *  que me permita tachar el elemento de la lista
 *  como resuelto. (texto puede ir en span)
 */

const addTodo = () => {
    const tarea = document.querySelector("input").value;
    const span = document.createElement("span"); 
    const li = document.createElement("li");
    //para tachar
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    //boton
    const deletebutton = document.createElement("button");
    deletebutton.type = "button";
    deletebutton.innerText = "Delete"; 
    if (tarea === "") throw new Error ('No ingresaste ninguna tarea');
    span.innerText = tarea;
    document.querySelector("input").value = "";

    //agregar al html
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deletebutton);
    document.querySelector("ul").appendChild(li);  

    //borrar
    const borrarTodo = event => {
        const botonBorrar = event.target.parentElement;
        botonBorrar.remove();
    };
    deletebutton.addEventListener("click", borrarTodo);

    //checkbox tachar
    checkbox.classList.add("check");
    
};

const load = () => {
    const button = document.querySelector("button");
    button.addEventListener("click", addTodo);
    const tarea = document.querySelector("input")
    tarea.addEventListener("keypress", event => {
        if(event.keyCode === 13){
            addTodo();
        };
    });
    
    tarea.addEventListener("focus", e => {
        e.target.style.border = "2px solid red";
        e.target.style.width = "50%";
        e.target.style.outline = "none";
    });

    tarea.addEventListener("blur", e => {
        e.target.style.border = "";
        e.target.style.width = "";
    });
};