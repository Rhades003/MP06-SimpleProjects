"use strict";
//import { Client } from './Client';
//import { Order } from './Order';
class Client {
    constructor(name, surname, order) {
        this.name = name;
        this.surname = name;
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
    const client = new Client("Ruben", "Julian", new Order("pasta"));
    const client2 = new Client("Ruben", "Julian", new Order("Hamburguesa"));
    console.log(client);
    console.log(client2);
}
