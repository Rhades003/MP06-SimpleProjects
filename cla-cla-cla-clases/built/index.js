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
function showPepe(restaurant) {
    if (restaurant) {
        let name = document.createElement("h2");
        name.innerText = restaurant.name;
        document.body.appendChild(name);
        let ubi = document.createElement("p");
        ubi.innerText = restaurant.ubi;
        document.body.appendChild(ubi);
        let plats = document.createElement("ul");
        for (let plat of restaurant.plats.entries()) {
            let platLi = document.createElement("li");
            platLi.innerText = (plat[0] + ": " + plat[1] + "€");
            plats.appendChild(platLi);
        }
        document.body.appendChild(plats);
    }
    else {
        let pepe = document.createElement("p");
        pepe.innerText = "El restaurant no està obert";
        document.body.appendChild(pepe);
    }
}
function addPlat() {
    let nameInput = document.getElementById("nameInput");
    let name = nameInput.value;
    let priceInput = document.getElementById("priceInput");
    let price = priceInput.valueAsNumber;
    restaurant.plats.set(name, price);
    for (let plat of restaurant.plats.entries()) {
        console.log(plat[0] + " " + plat[1]);
    }
    showPepe(restaurant);
}
class Client {
    constructor(name, surname, order) {
        this.name = name;
        this.surname = surname;
        this.order = order;
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
    const client = new Client("Ruben", "Julian", new Order("Pasta"));
    const client2 = new Client("Ruben", "Julian", new Order("Hamburguesa"));
    console.log(client);
    console.log(client2);
    showPepe(restaurant);
}
