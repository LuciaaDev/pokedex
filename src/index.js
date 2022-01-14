function getPokemon(id) {
    fetch('https://pokeapi.co/api/v2/pokemon/'+ id)
    .then( response => response.json() )
    .then( data => pushInfo(data));
    
}

function getInfo(){
    let idPokemon = document.querySelector(".id");
    let number = idPokemon.value;
    getPokemon(number);
}

function pushInfo(pokemon){
    let img = document.querySelector(".img");
    let pokeData = document.querySelector(".poke-data");
    pokeData.innerHTML='';
    console.log(pokemon);
    img.src = pokemon.sprites.front_default;
    
    let idContainer = document.createElement('div');
    idContainer.appendChild(document.createTextNode("#" + pokemon.id));
    pokeData.appendChild(idContainer); 

    let nameContainer = document.createElement('div');
    nameContainer.appendChild(document.createTextNode("Nombre: " + pokemon.name.toUpperCase()));
    pokeData.appendChild(nameContainer);

    for (let i = 0; i <= 4; i++) {
        let movesContainer = document.createElement('div');
        movesContainer.appendChild(document.createTextNode("Ataque: " + pokemon.moves[i].move.name));
        pokeData.appendChild(movesContainer);
    }
    
    for (let i = 0; i <= 1; i++){
        let typeContainer = document.createElement('div');
        typeContainer.appendChild(document.createTextNode("Tipo: " + pokemon.types[i].type.name));
        pokeData.appendChild(typeContainer);
    }

    let heightContainer = document.createElement('div');
    heightContainer.appendChild(document.createTextNode("Altura: " + pokemon.height));
    pokeData.appendChild(heightContainer);

    let weightContainer = document.createElement('div');
    weightContainer.appendChild(document.createTextNode("Peso: " + pokemon.weight));
    pokeData.appendChild(weightContainer);

    
    
    
    
    
}

// DOM

let infoPoke = document.querySelector(".pokemon");
let btn = document.querySelector(".send");


btn.addEventListener("click", getInfo);