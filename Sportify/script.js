// Document Object Model (DOM) - Modelo de Obejto de Documentos
// Representação de uma árvore do documento HTML, que terá todos os elementos

// atribuindo a representação,valores, do elemento que tem o id search-input

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlalist = document.getElementById('container-playlist');


// exemplo utilizando class, querySelectorAll pega todos
// const searchInput2 = document.querySelector('.cards');

function requestApi(searchTerm) {
    // para criar api fake, instala json serve usando o comando "npm i json-server -g"
    // usandos para fazer requisições de Apis, carrega nomes semelhantes ao que foi digitado
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    
    fetch(url)
    // promises: programação assícrona
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    hidePlaylists();
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
    resultPlalist.classList.add("hidden");
  }
  

// manipulação de eventos

document.addEventListener("input", function(){
    // toLoweCase, deixa tudo minusculo
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ""){
        // se não digitar nada, irá esconder e o add mostra
        resultPlalist.classList.add("hidden");
        resultArtist.classList.remove("hidden");
        return;
    }

    requestApi(searchTerm);
})