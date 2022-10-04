import pokemonArray from './data/pokemon.js';

const renderSearchHTML = () => {
    const body = document.querySelector("h1");
    const searchHTML = '<input class="nameSearch">';
    body.insertAdjacentHTML("afterend", searchHTML);
}

const renderCards = () => {
    const cardContainer = document.querySelector(".card-container");
    let cardHTML = "";
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
renderSearchHTML();
renderCards();