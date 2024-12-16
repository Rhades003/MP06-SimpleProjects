//import { Client } from './Client';
//import { Order } from './Order';

const restaurant = {
    name: "Casa Pepe",
    ubi: "Avenida San Carlos N34",
    plats: new Map<string, number>([
        ["Pasta", 30],
        ["Pulpo Gallego", 40],
        ["Hamburguesa", 23]
    ]),
};
function showPepe(restaurant?:any){
    if(restaurant){
        let name:HTMLHeadingElement = document.createElement("h2");
        name.innerText = restaurant.name;
        document.body.appendChild(name);

        let ubi:HTMLParagraphElement = document.createElement("p");
        ubi.innerText = restaurant.ubi;
        document.body.appendChild(ubi);

        let plats:HTMLUListElement = document.createElement("ul");
        for (let plat of restaurant.plats.entries()) {
            let platLi:HTMLLIElement = document.createElement("li");
            platLi.innerText = (plat[0]+": "+plat[1]+"€");
            plats.appendChild(platLi); 
        }
        document.body.appendChild(plats);
    }
    else {
        let pepe:HTMLParagraphElement = document.createElement("p");
        pepe.innerText = "El restaurant no està obert";
        document.body.appendChild(pepe);
    } 
}
function addPlat(){
    let nameInput:HTMLInputElement = document.getElementById("nameInput") as HTMLInputElement;
    let name:string = nameInput.value;
    let priceInput:HTMLInputElement = document.getElementById("priceInput") as HTMLInputElement;
    let price = priceInput.valueAsNumber;
    restaurant.plats.set(name, price);
    for (let plat of restaurant.plats.entries()) {
    console.log(plat[0]+" "+plat[1])
    }
    showPepe(restaurant);
}

class Client {
    public name:string;
    public surname:string;
    public order:Order;
    
    constructor(name:string, surname:string, order:Order){
        this.name = name;
        this.surname = surname;
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
    const client = new Client("Ruben", "Julian", new Order("Pasta"));
    const client2 = new Client("Ruben", "Julian", new Order("Hamburguesa"));
    console.log(client);
    console.log(client2);

    showPepe(restaurant);
    
}

