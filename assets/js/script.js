const baseUrl = 'https://api.github.com/users';
const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
}
const getUser = async (user) => {
    const url = `${baseUrl}/${user}`;
    return request(url);
}
const getRepos = async (user, page, perPage) => {
    const url = `${baseUrl}/${user}/repos?page=${page}&per_page=${perPage}`;
    return request(url);
}



// ------------------------------------------------------
/*const imprimirDatos = event => {
    event.preventDefault()
    const user = 'melaniepardo'
    const page = 1
    const perPage = 2
    Promise.all([getUser(user), getRepos(user, page, perPage)])
        .then(resp => {
            console.log('resp', resp)
        })
        .catch(err => console.log('err', err))
    // const datosDeAtencion = crearDatosConsulta() // Ejecutamos la funcion para asignar el objeto a una nueva variable
    // if (datosDeAtencion) {
    //     const selectorDeLista = document.querySelector('#resultado > ul')
    //     selectorDeLista.innerHTML = `<li>${datosDeAtencion.datosPropietario()}</li> <li>${datosDeAtencion.tipo}, mientras que el nombre de la mascota es: ${datosDeAtencion.nombreMascota} y la enfermedad es: ${datosDeAtencion.enfermedad}.</li>`
    //     limpiezaDeLabels()
    // }
}
*/
// ----------------------- Funciones finalizadas -----------------------