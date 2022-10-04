import pokemonArray from './data/pokemon.js';

const renderCards = () => {
    const cardContainer = document.querySelector(".card-container");
    let cardHTML = "";
    for(let pokemon in pokemonArray){
        console.log(pokemonArray[pokemon].sprite);
        
        cardHTML += `<div class="card"><img class="card__image" src =${pokemonArray[pokemon].sprite}>`
        cardHTML += "</div>";
    }
    cardContainer.innerHTML += cardHTML;
}

renderCards();