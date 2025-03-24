// ---------------------------------------------------------------
// Parte 1: Declaramos nuestras variables y referencias del DOM
// ---------------------------------------------------------------

const cargarDatos = document.querySelector("#cargarBtn");
const limpiarDatos = document.querySelector("#limpiarBtn");
const filtrarDatos = document.querySelector("#filtrarBtn");  // Corregido el ID

const error = document.querySelector("#error");
const errorText = document.querySelector("#errorText");
const spinner = document.querySelector("#spinner");
const perfiles = document.querySelector("#perfiles");

const listaUsuarios = [];

// ---------------------------------------------------------------
// Parte 2: Funciones y Event Listeners
// ---------------------------------------------------------------

// Función para Mostrar/Ocultar Spinner
const toggleSpinner = (visible) => {
    if (visible === "on") {
        spinner.classList.remove("hidden");
    } else {
        spinner.classList.add("hidden");
    }
};

// Función para Mostrar Error
const mostrarError = (mensaje) => {
    errorText.textContent = mensaje;
    error.classList.remove("hidden");
};

// Función para Ocultar Error
const ocultarError = () => {
    error.classList.add("hidden");
};

const mostrardatos = (datos) => {
    // imprimir en pantalla las tarjetas de usuario
}

const cargarDatos = () => {

    // Hacer aquí el fetch

    fetch("./db/datos.json")
    .then( response => response.json () )
    .then( datos => {
        console.log(datos);
        mostrardatos(datos);
    })
    .catch( e => {
        console.warn("tuvimo un error obteniendo los datos")
    });


}



cargarDatos.addEventListener("click", cargarDatos);

// ---------------------------------------------------------------
// Parte 3: Código de nuestra app
// ---------------------------------------------------------------

mostrarError();
toggleSpinner();