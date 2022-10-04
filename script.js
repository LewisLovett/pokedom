import allPokemonArray from './data/pokemon.js';
const cardContainer = document.querySelector(".card-container");
let cardHTML = "";

const renderSearchHTML = () => {
    const header = document.querySelector("h1");
    let searchHTML = '<input class="nameSearch"><button class="searchBtn">Search</button>';
    searchHTML += '<input type="number" class="filterNumber" min="0" max="151" value="151">';
    searchHTML += '<select class="typeInput">';
    searchHTML += '<option value="all">All</option>'
    searchHTML += '<option value="grass">Grass</option>';
    searchHTML += '<option value="poison">Poison</option>';
    searchHTML += '<option value="fire">Fire</option>';
    searchHTML += '<option value="flying">Flying</option>';
    searchHTML += '<option value="water">Water</option>';
    searchHTML += '<option value="bug">Bug</option>';
    searchHTML += '<option value="grass">Grass</option>';
    searchHTML += '<option value="normal">Normal</option>';
    searchHTML += '<option value="electric">Electric</option>';
    searchHTML += '<option value="ground">Ground</option>';
    searchHTML += '<option value="fairy">Fairy</option>';
    searchHTML += '<option value="fighting">Fighting</option>';
    searchHTML += '<option value="psychic">Psychic</option>';
    searchHTML += '<option value="rock">Rock</option>';
    searchHTML += '<option value="steel">Steel</option>';
    searchHTML += '<option value="ice">Ice</option>';
    searchHTML += '<option value="ghost">Ghost</option>';
    searchHTML += '<option value="dragon">Dragon</option>'
    searchHTML += '</select">'
    header.insertAdjacentHTML("afterend", searchHTML);
    document.querySelector(".searchBtn").addEventListener("click",searchCard);
}

const renderCards = (pokemonArray) => {
    cardContainer.innerHTML = "";
    cardHTML = "";
    let filterNumber = Number(document.querySelector(".filterNumber").value);
    let filterType = document.querySelector(".typeInput").value;
    let numOfCards = 0
    for(let pos in pokemonArray){
        if (numOfCards < filterNumber){
            
            let pokemon = pokemonArray[pos];
            if (filterType == "all" || filterType == pokemon.types[0] || filterType == pokemon.types[1] ){
            numOfCards++;
            let pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            cardHTML += '<div class="card">';
            cardHTML += `<img class="card__image" src =${pokemon.sprite}>`;
            cardHTML += '<div class="card__content">';
            cardHTML += `<h2 class="card__heading">${pokemonName}</h2>`;
            cardHTML += `<p class="card__text">${pokemonName}(#${pokemon.id}) is a ${pokemon.types[0]}`;
            if(pokemon.types.length > 1){
                for(let i = 1; i < pokemon.types.length; i++){
                    cardHTML += ` & ${pokemon.types[i]}`;
                }
            }
            cardHTML += " type pokemon."
            cardHTML += "</div>";
            cardHTML += "</div>";
        }
    }
    }
    cardContainer.innerHTML += cardHTML;
}

const searchCard = () => {
    const pokemonName = document.querySelector(".nameSearch").value;
    let filteredPokemon =[]
    for (let pos in allPokemonArray){
        if (allPokemonArray[pos].name == pokemonName){
            filteredPokemon.push(allPokemonArray[pos])
        }
    }
    if (pokemonName==""){
        filteredPokemon=allPokemonArray;
    }
    renderCards(filteredPokemon);
}
renderSearchHTML();
renderCards(allPokemonArray);