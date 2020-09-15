const setActive = event => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navLink = event.target;
    for(let nl of navLinks) {
        nl.classList.remove("is-active");
    }
    navLink.classList.add("is-active");
};

const hideAllMainScts = () => {
    const sections = document.querySelectorAll(".main-sct");
    for(let sct of sections) {
        sct.style.display = "none";
    }
}

const openRazas = () => {
    hideAllMainScts();
    document.querySelector("#sct-razas").style.display = "block";
    document.querySelector("#btn-random").addEventListener("click", openRandom);
};

const openRandom = e => {
    hideAllMainScts();
    axios.get("https://api.thecatapi.com/v1/images/search/")
        .then(res => {
            document.querySelector("#random-img").src = res.data[0].url;
            document.querySelector("#sct-random").style.display = "flex";
            e.target.removeEventListener("click", openRandom);
        })
        .catch(err => alert("Hubo un error"));
}


let array = [];

const razas = async () => {
    const input = document.querySelector("#inputRazas").value;
    try {
        const res = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${input}`);
            const buscar = array.findIndex(raza => raza === res.data[0].name);
            if(buscar !== -1) throw new Error("La raza ya fue encontrada");
            array.push(res.data[0].name);
            document.querySelector("#inputRazas").value = "";
            const tbody = document.querySelector("#tbody");
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerText = res.data[0].name;
                tr.appendChild(td);
                tbody.appendChild(tr);

    } catch(err) {
        alert("No existe la raza o ya la buscaste anteriormente");
    }   
} 

/* Otra solución
const solicitarRazas = async () => {
    const input = document.querySelector("#inputRazas");
    try {
        const res = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${input.value}`);       
        const search = res.data[0];          
        createSearch(search);

    } catch(err) {
        alert("No existe la raza o ya la buscaste anteriormente");
    }   
} 

const createSearch = search => {
    const tbody = document.querySelector("#tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = search.name;
    tr.appendChild(td);
    tbody.appendChild(tr);
}
*/

const load = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", setActive);
    });

    const btnRazas = document.querySelector("#btn-razas");
    const btnRandom = document.querySelector("#btn-random");

    btnRazas.addEventListener("click", openRazas);
    btnRandom.addEventListener("click", openRandom);

    const buscarRazas = document.querySelector("#buscarRazas");
    buscarRazas.addEventListener("click", razas);

    //BOTON ACEPTAR CON ENTER agregar mesa
    const inputRazas = document.querySelector("#inputRazas")
    inputRazas.addEventListener("keypress", event => {
        if (event.keyCode === 13) {
            razas();
        };
    });
};