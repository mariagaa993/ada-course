let arrTodo = [];
let users = [];

const load = () => {
       
    const p1 = axios.get("https://jsonplaceholder.typicode.com/todos");
    const p2 = axios.get("https://jsonplaceholder.typicode.com/users");

    Promise.all([p1, p2]).then(res => {
        arrTodo = res[0].data;
        users = res[1].data;
        arrTodo.forEach(todo => {
            crearElementos(todo);
        });    
    });

    const crearElementos = (todo) => {
        const lista = document.querySelector("#todo-list"); 
        const li = document.createElement('li');
        const title = document.createTextNode(todo.title);
        const u = users.find(user => user.id === todo.userId);
        const user = document.createTextNode(u.name);
        const separator = document.createTextNode(" - ");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.id = "checkboxId";
        checkbox.addEventListener("click", () => {
            axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                completed: checkbox.checked
                
            }).then(res => {
                console.log(res.data)
                if(!(res.data.completed)){
                    li.style.textDecoration  = "none";
                } else {
                    li.style.textDecoration  = "line-through"; 
                }
                
            })
            .catch(err => {throw err;});
        });

        li.appendChild(title);
        li.appendChild(separator);
        li.appendChild(user);
        li.appendChild(checkbox);

        if(todo.completed) li.classList.add("completed");         
        lista.appendChild(li);
    }
    
    
    const addPostButton = document.querySelector("#buttonAdd");
    addPostButton.addEventListener("click", async () => {
        try {
            const inputNewTask = document.querySelector('#titleTodo').value;
            console.log(inputNewTask)
            const newPost = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title: inputNewTask,
                completed: false,             
                userId: 1,
            })        
            arrTodo.push(newPost.data);
            crearElementos(newPost.data); 
        } catch (err) {
            console.log(err);
        }
    });
};