
//Funció per provar les funcions realitzades, comenteu i descomenteu una linea per separat per provar les diferents opcions
function execucions(){
    // Exercici 1: Classificar Paraules
    //const paraules:string[] = ["cotxe", "avió", "ferrocarril", "vaixell", "motocicleta", "tractor"]; //Resultat: 4 elements: ferrocarril, vaixell, motocicleta, tractor
    //const paraules:string[] = ["blau", "vermell", "taronja", "gris", "platejat"]; //Resultat: 3 elements: vermell, taronja, platejat
    const paraules:string[] = ["gos", "gat", "elefant", "caball"]; //Resultat: 2 elements: elefant, caball
    console.log(classificarParaules(paraules));

    // Exercici 2: Analitzar Temperatures
    //analitzarTemperatures(12,4,30,2,11,26); //Resultat: Mitjana 14.17, Màxima 30, Mínima 2 
    //analitzarTemperatures(9,15,7,5,8); //Resultat: Mitjana 8.80, Màxima 15, Mínima 5 
    analitzarTemperatures(19,20,21); //Resultat: Mitjana 20.00, Màxima 21, Mínima 19 

    // Exercici 3: Enviar Missatges
    //enviarMissatges("test@mail.com", "Demano informació sobre aquest curs"); //Resultat: Missatge enviat a l'email, contingut: Demano informació sobre aquest curs
    //enviarMissatges("test@mail.com", "Demano informació sobre aquest curs", "Salutacions"); //Resultat: Missatge enviat a l'email, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs"); //Resultat (alert): Missatge enviat al telèfon, contingut: Demano informació sobre aquest curs
    enviarMissatges(985421122, "Demano informació sobre aquest curs", "Salutacions"); //Resultat (alert): Missatge enviat al telèfon, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges("error", "error"); //Resultat: L'email no té un format vàlid.
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
   
    if(typeof emailOrPhone == "string" && emailOrPhone.substring(emailOrPhone.length-9, emailOrPhone.length)){
        console.log(end ? "Missatge enviat a l'email, contingut: "+end+" "+content  : "Missatge enviat a l'email, contingut: "+content);
    }
    else if (typeof emailOrPhone == "number" && emailOrPhone.toString().length == 9) {
        alert(end ? "Missatge enviat a l'email, contingut: "+end+" "+content : "Missatge enviat al telèfon, contingut: "+content)
    }
    else {
        console.log("L'email no té un format vàlid.");
    }
}