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
}
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
    if (input1.includes(',')) {
        let inputArray = input1.split(",", 2);
        pokemonMap.set(inputArray[0], inputArray[1]);
    }
    else if (input2)
        pokemonMap.set(input1, input2);
    else
        itemList.push(input1);
}
function printLists(input) {
    let divLists = document.getElementById('lists');
    divLists.innerHTML = "";
    if (input === "item") {
        itemList.forEach(item => {
        });
        //divLists.appendChild();
    }
    else if (input === "pokemon") {
    }
    else {
    }
}
