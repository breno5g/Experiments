function start() {
    let pokedex = document.createElement("div");
    pokedex.classList.add("pokedexContainer");
    for (let i = 1; i <= 151; i++) {
        let box = document.createElement("div");

        let POKEAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let poke = document.createElement("img");
        let figure = document.createElement("figure");
        // poke.setAttribute(
        //     "src",
        //     `https://pokeres.bastionbot.org/images/pokemon/${i}.png`
        // );
        figure.appendChild(poke);
        let pokename = document.createElement("h1");
        fetch(POKEAPI)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                poke.setAttribute("src", response.sprites.front_default);

                box.classList.add("pokeCard");
                box.classList.add(response.types[0].type.name);
                pokename.innerText = response.name;
                let typeBox = document.createElement("div");
                typeBox.classList.add("typeContainer");
                let pokeNumber = document.createElement("span");
                if (response.id < 10) {
                    pokeNumber.innerText = `#00${response.id}`;
                } else if (response.id < 100) {
                    pokeNumber.innerText = `#0${response.id}`;
                } else {
                    pokeNumber.innerText = `#${response.id}`;
                }
                pokeNumber.classList.add("pokeNumber");
                response.types.forEach((e) => {
                    let poketype = document.createElement("span");
                    poketype.classList.add("poketype");
                    poketype.innerText = e.type.name;
                    typeBox.appendChild(poketype);
                });
                box.appendChild(pokeNumber);
                box.appendChild(figure);
                box.appendChild(pokename);
                box.appendChild(typeBox);
            });
        pokedex.appendChild(box);
    }
    document.body.appendChild(pokedex);
}

window.addEventListener("load", start());
