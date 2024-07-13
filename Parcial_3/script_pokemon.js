async function fetchPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

function displayPokemon(pokemon) {
    const container = document.getElementById('pokemon-info');
    container.innerHTML = `
        <div class="card">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h5>
                <p class="card-text">Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
                <p class="card-text">Peso: ${pokemon.weight} hectogramos</p>
            </div>
        </div>
    `;
}

// Llamada a la función con el nombre del pokémon que quieres buscar
fetchPokemon('charmander');
