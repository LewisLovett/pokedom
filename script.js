import pokemonArray from './data/pokemon.js';

const renderCards = () => {
    const cardContainer = document.querySelector(".card-container");
    let cardHTML = "";
    for(let pos in pokemonArray){
        let pokemon = pokemonArray[pos];
        cardHTML += '<div class="card">';
        cardHTML += `<img class="card__image" src =${pokemon.sprite}>`;
        cardHTML += '<div class="card__content">';
        cardHTML += `<h2 class="card__heading">${pokemon.name}</h2>`;
        cardHTML += `<p class="card__text">${pokemon.name}(#${pokemon.id}) is a ${pokemon.types[0]}`;
        if(pokemon.types.length > 1){
            for(let i = 1; i < pokemon.types.length; i++){
                cardHTML += ` & ${pokemon.types[i]}`;
            }
        }
        cardHTML += "</div>";
        cardHTML += "</div>";
    }
    cardContainer.innerHTML += cardHTML;
}

renderCards();