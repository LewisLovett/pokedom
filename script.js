import pokemonArray from './data/pokemon.js';
console.log(pokemonArray);

const renderCards = () => {
    const cardContainer = document.querySelector("card-container");
    for(pokemon in pokemonArray){
        let cardHTML = "";
        cardHTML += `<div class="card"><`
    }
}