"use strict";
let clientsMap = new Map();
function generate() {
    clientsMap.set("Ash", "pierdeligas@gmaill.com");
    clientsMap.set("Lionel", "elcampeon@gmail.com");
    clientsMap.set("Red", "...@gmail.com");
    showClients();
}
const checkEmail = (mail) => (mail.substring(mail.length - 10, mail.length) == "@gmail.com") ? true : false;
function showClients() {
    for (let client of clientsMap.entries()) {
        if (checkEmail(client[1]))
            console.log(client);
    }
}
function addEntities(input1, input2) {
    console.log("input1: " + input1 + " input2: " + input2);
}
function classificarParaules(paraules) {
    paraules.forEach((paraula) => {
        if (paraula.length > 5)
            console.log(paraula);
    });
}
function analitzarTemperatures(...temperatures) {
    let tempMax = 0;
    let tempMin = 10000000;
    let allTemps = 0;
    let i = 0;
    temperatures.forEach((temperatura) => {
        if (temperatura > tempMax)
            tempMax = temperatura;
        if (temperatura < tempMin)
            tempMin = temperatura;
        allTemps = allTemps + temperatura;
    });
    let tabla = document.getElementById("taulaTemperatures");
    let fila = document.createElement("tr");
    let cell = document.createElement("th");
    cell.textContent = (allTemps / temperatures.length).toFixed(2).toString();
    fila.appendChild(cell);
    let cell2 = document.createElement("th");
    cell2.textContent = tempMax.toString();
    fila.appendChild(cell2);
    let cell3 = document.createElement("th");
    cell3.textContent = tempMin.toString();
    fila.appendChild(cell3);
    tabla.appendChild(fila);
    console.log((allTemps / temperatures.length).toFixed(2));
    console.log(tempMax);
    console.log(tempMin);
}
function enviarMissatges(emailOrPhone, content, end) {
    if (typeof emailOrPhone == "string") {
        console.log(end ? "Missatge enviat a l'email, contingut: " + end + " " + content : "Missatge enviat a l'email, contingut: " + content);
    }
    else if (typeof emailOrPhone == "number" && emailOrPhone.toString().length == 9) {
        alert(end ? "Missatge enviat a l'email, contingut: " + end + " " + content : "Missatge enviat al telèfon, contingut: " + content);
    }
    else {
        console.log("L'email no té un format vàlid.");
    }
}
