//import { Client } from './Client';
//import { Order } from './Order';
class Client {
    public name:string;
    public surname:string;
    public order:Order;
    
    constructor(name:string, surname:string, order:Order){
        this.name = name;
        this.surname = name;
        this.order = order;
    }
}
class Order {
    public plats: string;
    private id:number;
    private static id:number = 1;

    constructor(plats: string) {
        this.plats = plats;
        this.id = Order.id++;
    }
}

function generate() {
    const client = new Client("Ruben", "Julian", new Order("pasta"));
    const client2 = new Client("Ruben", "Julian", new Order("Hamburguesa"));
    console.log(client);
    console.log(client2);
    
}

