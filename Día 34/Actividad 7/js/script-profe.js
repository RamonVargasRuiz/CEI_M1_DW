const containerBloques = document.querySelector(".container");
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.getElementById("containerCanciones");
const cancionActual = document.getElementById("cancionActual");
const divCurrebtSongInfo = document.getElementById("currentSongInfo");

let idCancionActual = 0;
let posicionTemaActual = 0;

// Lista de temas estaba mal definida
let listaTemas = [];

const canciones = [
    { id: 1, titulo: "Canción 1", artista: "Artista 1", imagen: "img/foto-1.jpg", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 2, titulo: "Canción 2", artista: "Artista 2", imagen: "img/foto-2.jpg", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 3, titulo: "Canción 3", artista: "Artista 3", imagen: "img/foto-3.jpg", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 4, titulo: "Canción 4", artista: "Artista 4", imagen: "img/foto-4.jpg", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { id: 5, titulo: "Canción 5", artista: "Artista 5", imagen: "img/foto-5.jpg", fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
];

listaTemas = canciones; // Ahora listaTemas tiene el valor correcto

// ------------------- NAVEGACIÓN ------------------- //
listaButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const target = button.getAttribute('data-tab');

        listaBloques.forEach(bloque => {
            bloque.classList.remove('active');
            if (bloque.id === target) {
                bloque.classList.add("active");
            }
        });

        listaButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

// ------------------- LISTAR TEMAS ------------------- //
canciones.forEach(tema => {
    const { id, titulo, artista, imagen } = tema;
    containerCanciones.innerHTML += `                
        <li class="cardCancion" data-id="${id}">
            <img class="imgCancion" src="./${imagen}" alt="${artista}">
            <div>
                <h2 class="tituloCancion">${titulo}</h2>
                <small class="artistaCancion">${artista}</small>
            </div>
        </li>`;

    const cardCancion = containerCanciones.lastElementChild;

    cardCancion.addEventListener("click", () => {
        cargarCancion(id);
        document.querySelector("[data-tab='tab3']").click(); // Corregí el error de data-tap
    });
});

// ------------------- REPRODUCTOR ------------------- //
const cardsCancion = document.querySelectorAll(".cardCancion");
cardsCancion.forEach((card, index) => {
    card.addEventListener("click", () => {
        const { titulo, artista } = canciones[index];
        cancionActual.innerHTML = `      
            <h4>${titulo}</h4>
            <small>${artista}</small>`;
    });
});

const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");
const nextBtn = document.querySelector(".fa-step-forward");
const prevBtn = document.querySelector(".fa-step-backward");
const audioPLayer = document.querySelector("#audioPlayer");

pauseBtn.style.display = "none";

// función para cargar un tema
function cargarCancion(id) {
    const cancion = listaTemas.find(tema => tema.id == id);
    if (!cancion) return;

    const { titulo, artista, imagen, fuente } = cancion;
    audioPLayer.src = fuente;
    idCancionActual = id;

    divCurrebtSongInfo.innerHTML = `
        <img src="${imagen}" alt="${artista}">
        <h2>${titulo}</h2>
        <p>${artista}</p>
    `;

    audioPLayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}

// event listeners de botones de reproductor
playBtn.addEventListener("click", () => {
    audioPLayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
});

pauseBtn.addEventListener("click", () => {
    audioPLayer.pause();
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    posicionTemaActual++;
    if (posicionTemaActual >= listaTemas.length) posicionTemaActual = 0;
    const idCancion = listaTemas[posicionTemaActual].id;
    cargarCancion(idCancion);
});
