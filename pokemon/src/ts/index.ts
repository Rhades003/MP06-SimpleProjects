let clientsMap:Map<string,string> = new Map();

function generate(){    
    clientsMap.set("Ash","pierdeligas@gmaill.com");
    clientsMap.set("Lionel","elcampeon@gmail.com");
    clientsMap.set("Red","...@gmail.com");
   
    showClients();
}

const checkEmail = (mail:string) => (mail.substring(mail.length-10, mail.length) == "@gmail.com") ? true : false;

function showClients(){
    for (let client of clientsMap.entries()) {
       if(checkEmail(client[1])) console.log(client);
    }
}
function addEntities(input1:string, input2:string){
    console.log("input1: "+input1+" input2: "+input2)

}






function classificarParaules(paraules:string[]){
    paraules.forEach((paraula:string) => {
        if(paraula.length > 5) console.log(paraula);
    });
}

function analitzarTemperatures(...temperatures: number[]){
    let tempMax:number = 0;
    let tempMin:number = 10000000;
    let allTemps:number =0;
    let i:number = 0;
    temperatures.forEach((temperatura:number) => {
            if(temperatura > tempMax) tempMax = temperatura;
            if(temperatura < tempMin) tempMin = temperatura;
            allTemps = allTemps + temperatura;
    });

    let tabla:HTMLTableElement = document.getElementById("taulaTemperatures") as HTMLTableElement;

    let fila:HTMLTableRowElement = document.createElement("tr");

    
        let cell:HTMLTableCellElement = document.createElement("th");
        cell.textContent = (allTemps/temperatures.length).toFixed(2).toString();
        fila.appendChild(cell);

        let cell2:HTMLTableCellElement = document.createElement("th");
        cell2.textContent = tempMax.toString();
        fila.appendChild(cell2);

        let cell3:HTMLTableCellElement = document.createElement("th");
        cell3.textContent = tempMin.toString();
        fila.appendChild(cell3);
        tabla.appendChild(fila);


    console.log((allTemps/temperatures.length).toFixed(2));
    console.log(tempMax);
    console.log(tempMin);
}

function enviarMissatges(emailOrPhone:string | number, content:string, end?:string){
   
    if(typeof emailOrPhone == "string"){
        console.log(end ? "Missatge enviat a l'email, contingut: "+end+" "+content  : "Missatge enviat a l'email, contingut: "+content);
    }
    else if (typeof emailOrPhone == "number" && emailOrPhone.toString().length == 9) {
        alert(end ? "Missatge enviat a l'email, contingut: "+end+" "+content : "Missatge enviat al telèfon, contingut: "+content)
    }
    else {
        console.log("L'email no té un format vàlid.");
    }
}