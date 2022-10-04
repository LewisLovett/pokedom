import allPokemonArray from './data/pokemon.js';
const cardContainer = document.querySelector(".card-container");
let cardHTML = "";

const renderSearchHTML = () => {
    const header = document.querySelector("h1");
    const searchHTML = '<input class="nameSearch"><button class="searchBtn">Search</button>';
    header.insertAdjacentHTML("afterend", searchHTML);
    document.querySelector(".searchBtn").addEventListener("click",searchCard);
}

const renderCards = (pokemonArray) => {
    cardContainer.innerHTML = "";
    cardHTML = "";
    for(let pos in pokemonArray){
        let pokemon = pokemonArray[pos];
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
    renderCards(filteredPokemon);
}
renderSearchHTML();
renderCards(allPokemonArray);