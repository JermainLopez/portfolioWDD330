const requestURL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        //console.log(jsonObject)
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const pokemonList = jsonObject["results"];
        for (let i=0; i < 100; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = 'Name: '+ pokemonList[i].name;
            card.appendChild(h2);
            habilities(pokemonList[i].url, card);
            document.querySelector(".cards").appendChild(card);
        } 
    });

function habilities(requestURL, card){
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        //console.log(jsonObject)
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const pokemonList = jsonObject["abilities"];
        for (let i=0; i < pokemonList.length; i++) {
            let h5 = document.createElement('h5');
            h5.textContent = 'Hability ' + `${i + 1}` + ': ' + pokemonList[i].ability.name;
            card.appendChild(h5);
        } 
    });
}