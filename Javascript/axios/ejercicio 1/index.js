let posts = [];
const load = _ => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => posts = res.data)
    .catch(err => console.log(err));

    const postsButton = document.querySelector("#posts-button");
    postsButton.addEventListener("click", _ => {
        document.querySelector("#posts").value = JSON.stringify(posts);
    });

    const addPostButton = document.querySelector("#add-post");
    addPostButton.addEventListener("click", _ => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: "Titulo de nuevo Post",
            body: "Lorem Ipsum is",
            userId: 1
        }).then(res => posts.push(res.data))
        .catch(err => {throw err;});
    });

    const modifyButton = document.querySelector("#modify-post");
    modifyButton.addEventListener("click", _ => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            title: "Titulo de nuevo Post",
            body: "Lorem Ipsum is",
            userId: 1
        }).then(res => posts[0] = res.data)
        .catch(err => {throw err;});
    });
}