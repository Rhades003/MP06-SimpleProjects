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
const clientList:Client[] = [];

function showPepe(restaurant?:any){
    if(restaurant){
        let divMenu:HTMLDivElement = document.getElementById("menu") as HTMLDivElement;
        while (divMenu.firstChild) {
            divMenu.removeChild(divMenu.firstChild);
        }
        let name:HTMLHeadingElement = document.createElement("h2");
        name.innerText = restaurant.name;
        divMenu.appendChild(name);

        let ubi:HTMLParagraphElement = document.createElement("p");
        ubi.innerText = restaurant.ubi;
        divMenu.appendChild(ubi);

        let plats:HTMLUListElement = document.createElement("ul");
        for (let plat of restaurant.plats.entries()) {
            let platLi:HTMLLIElement = document.createElement("li");
            platLi.innerText = (plat[0]+": "+plat[1]+"€");
            plats.appendChild(platLi); 
        }
        divMenu.appendChild(plats);
        document.body.appendChild(divMenu);
    }
    else {
        let pepe:HTMLParagraphElement = document.createElement("p");
        pepe.innerText = "El restaurant no està obert";
        document.body.appendChild(pepe);
    } 
}
function showClients() {
    let clientDiv:HTMLDivElement = document.getElementById("vistaClients") as HTMLDivElement;
    while (clientDiv.firstChild) {
        clientDiv.removeChild(clientDiv.firstChild);
    }
    clientList.forEach(client => {
        let name:HTMLParagraphElement = document.createElement("p");
        let surname:HTMLParagraphElement = document.createElement("p");
        let br:HTMLBRElement = document.createElement("br");

        name.innerHTML = client.name;
        surname.innerHTML = client.surname;

        clientDiv.appendChild(name);
        clientDiv.appendChild(surname);
        clientDiv.appendChild(br);

        document.body.appendChild(clientDiv);
    });
}
function addPlat(){
    let nameInput:HTMLInputElement = document.getElementById("namePlatInput") as HTMLInputElement;
    let name:string = nameInput.value;
    let priceInput:HTMLInputElement = document.getElementById("priceInput") as HTMLInputElement;
    let price = priceInput.valueAsNumber;
    restaurant.plats.set(name, price);
    for (let plat of restaurant.plats.entries()) {
    console.log(plat[0]+" "+plat[1])
    }
    showPepe(restaurant);
}
function addClient(){
    let nameInput:HTMLInputElement = document.getElementById("nameClientInput") as HTMLInputElement;
    let name:string = nameInput.value;
    let surnameInput:HTMLInputElement = document.getElementById("surnameInput") as HTMLInputElement;
    let surname = surnameInput.value;
    let dniInput:HTMLInputElement = document.getElementById("dniInput") as HTMLInputElement;
    let dni = dniInput.value;
    let cardInput:HTMLInputElement = document.getElementById("cardInput") as HTMLInputElement;
    let card = cardInput.value;

    let client = new Client(name, surname, dni, card);
    clientList.push(client);
}

class Client {
    public name:string;
    public surname:string;
    public order:Order[] = [];
    protected dni:string;
    protected card:string;
    constructor(name:string, surname:string, dni:string, card:string){
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.card = card;
    }

    addOrder(order:Order){
        this.order.push(order);
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
    const client = new Client("Ruben", "Julian", "45679087X", "5765476547675");
    const client2 = new Client("Ruben2", "Julian", "45679087X", "5765476547675");
    console.log(client);
    console.log(client2);

    showPepe(restaurant);
    
}

