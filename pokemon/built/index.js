"use strict";
let clientsMap = new Map();
let pokemonMap = new Map();
let itemList = [];
function generate() {
    clientsMap.set("Ash", "pierdeligas@gmaill.com");
    clientsMap.set("Lionel", "elcampeon@gmail.com");
    clientsMap.set("Red", "...@gmail.com");
    clientsMap.set("Tobias", "muchoslegendarios@gmail.com");
    showClients();
    addEntities("0448", "Lucario");
    addEntities("Lucarita");
    addEntities("0198", "Murkrow");
    addEntities("Mineral Evolutivo");
}
//En una función flecha miro si el mail es correcto (solo admito @gmail.com)
const checkEmail = (mail) => (mail.substring(mail.length - 10, mail.length) == "@gmail.com") ? true : false;
function showClients() {
    let trainerList = document.getElementById("trainerList");
    for (let client of clientsMap.entries()) {
        if (checkEmail(client[1])) {
            let trainer = document.createElement('li');
            trainer.innerHTML = client.toString().replace(",", " ");
            trainerList.appendChild(trainer);
        }
    }
}
function addEntities(input1, input2) {
    var _a;
    //si no le paso un input significa que viene del html y que tengo que pillar el value del input
    if (!input1) {
        //pillo el input
        let inputElement = document.getElementById("input1");
        //miro con el if si el input tiene coma para ver si es un pokemon o un item
        if ((_a = inputElement.value) === null || _a === void 0 ? void 0 : _a.includes(',')) {
            //si tiene coma lo separo spliteando con una coma y lo guardo en una array de 2 index
            let inputArray = inputElement.value.split(",", 2);
            //añado en index 0 y 1 de la array en el set
            pokemonMap.set(inputArray[0], inputArray[1]);
        }
        //si no hay coma lo termino guardando en una array de items
        else
            itemList.push(inputElement.value);
    }
    else {
        //si finalmente le paso algún input es que le llamo desde el script y miro si existe el input1 y 2
        //si es el caso los añado en un set como pokemon
        if (input1 && input2)
            pokemonMap.set(input1, input2);
        //si no lo añado en la array de items
        else if (input1)
            itemList.push(input1);
    }
}
//En este metódo creo y relleno las tablas dependiendo de lo que le llegue para saber que printar
function printLists(input) {
    //pillo el div donde van a ir las tablas y lo vacío
    let divLists = document.getElementById('lists');
    divLists.innerHTML = "";
    //creo el titulo con un h2 y si el input es pokemon pongo lista de pokemns y si no lista de items
    //si es ambas mas adelante lo cambio
    let title = document.createElement('h2');
    title.innerHTML = input === "pokemon" ? "Lista de Pokemons" : "Lista de Items";
    //creo la tabla y el tr
    let table = document.createElement('table');
    let tableHeader = document.createElement('tr');
    //si el input es item relleno la tabla de una sola columna
    if (input === "item") {
        //creo la cabecera y la añado a la tabla
        let headerCell1 = document.createElement('th');
        headerCell1.innerHTML = "Item";
        tableHeader.appendChild(headerCell1);
        table.appendChild(tableHeader);
        //itero los items de la lista de items para añadir primero la fila y luego la celda ya que solo es una
        //la relleno con el contenido y voy desde más abajo a arriba añadiendo los nodos unos dentro de otros
        itemList.forEach(item => {
            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            cell1.innerHTML = item;
            row.appendChild(cell1);
            table.appendChild(row);
        });
        divLists.appendChild(title);
        divLists.appendChild(table);
    }
    //si el input es pokemon relleno la tabla con dos columnas
    else if (input === "pokemon") {
        //creo la cabecera y la añado a la tabla
        let headerCell1 = document.createElement('th');
        headerCell1.innerHTML = "Número";
        let headerCell2 = document.createElement('th');
        headerCell2.innerHTML = "Pokemon";
        tableHeader.appendChild(headerCell1);
        tableHeader.appendChild(headerCell2);
        table.appendChild(tableHeader);
        //itero los pokemons del map de pokes para añadir primero la fila y luego la celda del N. de la pokedex y luego el nombre del poke
        //la relleno con el contenido y voy desde más abajo a arriba añadiendo los nodos unos dentro de otros
        pokemonMap.forEach((value, key) => {
            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            cell1.innerHTML = key;
            let cell2 = document.createElement('td');
            cell2.innerHTML = value;
            row.appendChild(cell1);
            row.appendChild(cell2);
            table.appendChild(row);
        });
        divLists.appendChild(title);
        divLists.appendChild(table);
    }
    else {
        //Aquí es donde declaro otra vez el título para la tabla que es ambas
        title.innerHTML = "Lista de Pokemons y Items";
        //Aquí declaro las cabeceras de la tabla
        let headerCell1 = document.createElement('th');
        headerCell1.innerHTML = "Número";
        let headerCell2 = document.createElement('th');
        headerCell2.innerHTML = "Pokemon";
        let headerCell3 = document.createElement('th');
        headerCell3.innerHTML = "Item";
        tableHeader.appendChild(headerCell1);
        tableHeader.appendChild(headerCell2);
        tableHeader.appendChild(headerCell3);
        table.appendChild(tableHeader);
        //Aquí creo el maxlength para saber el numero máximo de filas y en el if/else miro que tiene mas indices si el
        //map de pokemons o la array de objetos
        let maxLength;
        if (pokemonMap.size > itemList.length)
            maxLength = pokemonMap.size;
        else
            maxLength = itemList.length;
        //En bucle itero y voy rellenando las celdas de la tabla, y si en una lista hay mas entradas que en otra
        //pongo los if por si el iterador sobrepasa la length de alguna para poner un guión
        //creo los td y los relleno dependiendo de lo de antes
        for (let i = 0; i < maxLength; i++) {
            let row = document.createElement('tr');
            let cell1 = document.createElement('td');
            let pokemonArray = Array.from(pokemonMap.entries())[i];
            if (i < pokemonMap.size)
                cell1.innerHTML = pokemonArray[0];
            else
                cell1.innerHTML = "-";
            let cell2 = document.createElement('td');
            if (i < pokemonMap.size)
                cell2.innerHTML = pokemonArray[1];
            else
                cell2.innerHTML = "-";
            let cell3 = document.createElement('td');
            if (i < itemList.length)
                cell3.innerHTML = itemList[i];
            else
                cell3.innerHTML = "-";
            // Aquí añado las celdas a las filas
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            table.appendChild(row);
            //Aquí añado el titulo y la tabla
            divLists.appendChild(title);
            divLists.appendChild(table);
        }
    }
}
//al darle click al boton de la pokeball la oculto y muestro la pokedex
function showContent() {
    let content = document.getElementById("content");
    let pokeball = document.getElementById("pokeball");
    pokeball.style.display = "none";
    content.style.display = "block";
}
