"use strict";
let barçaImg = document.getElementById("barcelona");
let madridImg = document.getElementById("madrid");
let marcadorBarça = document.getElementById("red");
let marcadorMadrid = document.getElementById("orange");
let golesBarça = 0;
let golesMadrid = 0;
let marcadorFaltasBarça = document.getElementById("brown");
let marcadorFaltasMadrid = document.getElementById("purple");
let faltasBarça = 0;
let faltasMadrid = 0;
let goleadoresContador = document.getElementById("green");
let minutosContador = document.getElementById("blue");
let goleadores = "";
let minutos = 0;
//SUMAR T RESTAR GOOOOOOOOOLES
barçaImg.addEventListener("mousedown", (e) => {
    switch (e.button) {
        case 0:
            golesBarça++;
            marcadorBarça.innerText = golesBarça.toString();
            break;
        case 2:
            if (golesBarça != 0)
                golesBarça--;
            marcadorBarça.innerText = golesBarça.toString();
            break;
    }
});
madridImg.addEventListener("mouseup", (e) => {
    switch (e.button) {
        case 0:
            golesMadrid++;
            marcadorMadrid.innerText = golesMadrid.toString();
            break;
        case 2:
            if (golesMadrid != 0)
                golesMadrid--;
            marcadorMadrid.innerText = golesMadrid.toString();
            break;
    }
});
barçaImg.addEventListener("mouseenter", function () {
    faltasBarça++;
    marcadorFaltasBarça.innerText = faltasBarça.toString();
});
madridImg.addEventListener("mouseleave", function () {
    faltasMadrid++;
    marcadorFaltasMadrid.innerText = faltasMadrid.toString();
});
document.body.addEventListener("keypress", function (e) {
    goleadores += e.key.toString();
    goleadores.concat("concat");
    if (e.key != "0") {
        goleadoresContador.innerText = goleadores;
    }
    else {
        goleadoresContador.innerHTML = "";
        goleadores = "";
    }
});
document.body.addEventListener("dblclick", function () {
    minutos++;
    minutosContador.innerText = minutos.toString();
});
// madridImg.addEventListener("click", function(){
//     golesMadrid++
//     marcadorMadrid.innerText = golesMadrid.toString();
// }); 
// //RESTAR GOOOOOOOLES
// barçaImg.addEventListener("auxclick", function(){
//     golesBarça--
//     marcadorBarça.innerText = golesBarça.toString();
//  }); 
//  madridImg.addEventListener("auxclick", function(){
//      golesMadrid--
//      marcadorMadrid.innerText = golesMadrid.toString();
//  }); 
//madridImg.addEventListener("click", gooooooool);
//function gooooooool():void {
//}
//# sourceMappingURL=index.js.map