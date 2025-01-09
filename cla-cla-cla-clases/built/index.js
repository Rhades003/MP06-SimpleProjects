"use strict";
//import { Client } from './Client';
//import { Order } from './Order';
const restaurant = {
    name: "Casa Pepe",
    ubi: "Avenida San Carlos N34",
    plats: new Map([
        ["Pasta", 30],
        ["Pulpo Gallego", 40],
        ["Hamburguesa", 23]
    ]),
};
const clientList = [];
function showPepe(restaurant) {
    if (restaurant) {
        let divMenu = document.getElementById("menu");
        while (divMenu.firstChild) {
            divMenu.removeChild(divMenu.firstChild);
        }
        let name = document.createElement("h2");
        name.innerText = restaurant.name;
        divMenu.appendChild(name);
        let ubi = document.createElement("p");
        ubi.innerText = restaurant.ubi;
        divMenu.appendChild(ubi);
        let plats = document.createElement("ul");
        for (let plat of restaurant.plats.entries()) {
            let platLi = document.createElement("li");
            platLi.innerText = (plat[0] + ": " + plat[1] + "€");
            plats.appendChild(platLi);
        }
        divMenu.appendChild(plats);
        document.body.appendChild(divMenu);
    }
    else {
        let pepe = document.createElement("p");
        pepe.innerText = "El restaurant no està obert";
        document.body.appendChild(pepe);
    }
}
function showClients() {
    let clientDiv = document.getElementById("vistaClients");
    while (clientDiv.firstChild) {
        clientDiv.removeChild(clientDiv.firstChild);
    }
    clientList.forEach(client => {
        let name = document.createElement("p");
        let surname = document.createElement("p");
        let br = document.createElement("br");
        name.innerHTML = client.name;
        surname.innerHTML = client.surname;
        clientDiv.appendChild(name);
        clientDiv.appendChild(surname);
        clientDiv.appendChild(br);
        document.body.appendChild(clientDiv);
    });
}
function addPlat() {
    let nameInput = document.getElementById("namePlatInput");
    let name = nameInput.value;
    let priceInput = document.getElementById("priceInput");
    let price = priceInput.valueAsNumber;
    restaurant.plats.set(name, price);
    for (let plat of restaurant.plats.entries()) {
        console.log(plat[0] + " " + plat[1]);
    }
    showPepe(restaurant);
}
function addClient() {
    let nameInput = document.getElementById("nameClientInput");
    let name = nameInput.value;
    let surnameInput = document.getElementById("surnameInput");
    let surname = surnameInput.value;
    let dniInput = document.getElementById("dniInput");
    let dni = dniInput.value;
    let cardInput = document.getElementById("cardInput");
    let card = cardInput.value;
    let client = new Client(name, surname, dni, card);
    clientList.push(client);
}
class Client {
    constructor(name, surname, dni, card) {
        this.order = [];
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.card = card;
    }
    addOrder(order) {
        this.order.push(order);
    }
}
class Order {
    constructor(plats) {
        this.plats = plats;
        this.id = Order.id++;
    }
}
Order.id = 1;
function generate() {
    const client = new Client("Ruben", "Julian", "45679087X", "5765476547675");
    const client2 = new Client("Ruben2", "Julian", "45679087X", "5765476547675");
    console.log(client);
    console.log(client2);
    showPepe(restaurant);
}
