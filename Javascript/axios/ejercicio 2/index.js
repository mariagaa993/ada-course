const load = _ => {
    const button = document.querySelector('#buttonMostrar');
    button.addEventListener('click', _ => {
        axios.get('https://jsonplaceholder.typicode.com/users/6') 
        .then(function (res) {
            if(res.status == 200) {
                const name = document.querySelector('#name').value = res.data.name;
                const username = document.querySelector('#username').value = res.data.username;
                const city = document.querySelector('#city').value = res.data.address.city;
                const website = document.querySelector('#website').value = res.data.website;
                const company = document.querySelector('#company').value = res.data.company.name;
                const contact = document.querySelector('#contact').value = res.data.email;
            };
        })
        .catch(function(err) {
            console.log(err);
        })
    });
};