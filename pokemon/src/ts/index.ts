let clientsMap:Map<string,string> = new Map();
let pokemonMap:Map<string, string> = new Map();
let itemList:string [] = [];

function generate(){    
    clientsMap.set("Ash","pierdeligas@gmaill.com");
    clientsMap.set("Lionel","elcampeon@gmail.com");
    clientsMap.set("Red","...@gmail.com");
    clientsMap.set("Tobias","muchoslegendarios@gmail.com");
    showClients();

}

const checkEmail = (mail:string) => (mail.substring(mail.length-10, mail.length) == "@gmail.com") ? true : false;

function showClients(){
    let trainerList:HTMLOListElement = document.getElementById("trainerList") as HTMLOListElement;
    for (let client of clientsMap.entries()) {
       if(checkEmail(client[1])) {
        let trainer:HTMLLIElement = document.createElement('li');
        trainer.innerHTML = client.toString().replace(",", " ");
        trainerList.appendChild(trainer);
       }
    }
}

function addEntities(input1:string, input2?:string): void;
function addEntities(): void;

function addEntities(input1?:string, input2?:string){
    
    if(input1.includes(',')){
        let inputArray:string[] = input1.split(",", 2);
        pokemonMap.set(inputArray[0], inputArray[1]);
    }
    else if(input2) pokemonMap.set(input1, input2);
    
    else itemList.push(input1);
}
function printLists(input:string){
    let divLists:HTMLDivElement = document.getElementById('lists') as HTMLDivElement;
    divLists.innerHTML = "";
    if(input === "item"){
        itemList.forEach(item => {
            
        });
        //divLists.appendChild();
    }
    else if(input === "pokemon"){

    }
    else {

    }
}