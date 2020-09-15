const mostrarToDo = _ => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            res.data.forEach(todo => {
                const user = response.data.find(user => user.id === todo.userId);
                const li = document.createElement('li');
                const span = document.createElement('span');   
                const botonEliminar = document.createElement('button');
                botonEliminar.innerText = "Eliminar";
                botonEliminar.className = "delete";
                botonEliminar.type = 'button';
                botonEliminar.style.marginLeft = "7px";
                botonEliminar.style.marginTop = "4px";
                span.innerText = `Nombre: `+ user.name +`\n Tarea: ` + todo.title;

                try {
                    if(todo.completed) {
                    li.style.textDecoration = 'line-through blue';
                    const eliminar = event => {
                    const eliminarToDo = event.target.parentElement;
                    eliminarToDo.remove();
                } 
                botonEliminar.addEventListener('click', eliminar);
                } else {
                    const mostrarAlerta = event => {
                        event.target.parentElement;
                        alert(`La tarea: ${todo.title} \nNo fue realizada`);         
                    } 
                botonEliminar.addEventListener('click', mostrarAlerta);
                } 
            } catch (err) {
                console.log(err);
            }
              
            li.appendChild(span);
            li.appendChild(botonEliminar);
            document.querySelector('ul').appendChild(li);
              
            });          
        });
    });    
};

const load = _ => {
    const botonMostrar = document.querySelector('#bttMostrar');
    botonMostrar.addEventListener('click', mostrarToDo); 
};