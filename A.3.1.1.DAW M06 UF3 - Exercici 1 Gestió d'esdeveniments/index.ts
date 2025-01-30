let barçaImg:HTMLImageElement = document.getElementById("barcelona") as HTMLImageElement;
let madridImg:HTMLImageElement = document.getElementById("madrid") as HTMLImageElement;

let marcadorBarça:HTMLInputElement = document.getElementById("red") as HTMLInputElement;
let marcadorMadrid:HTMLInputElement = document.getElementById("orange") as HTMLInputElement;

let golesBarça:number = 0;
let golesMadrid:number = 0;

let marcadorFaltasBarça:HTMLInputElement = document.getElementById("brown") as HTMLInputElement;
let marcadorFaltasMadrid:HTMLInputElement = document.getElementById("purple") as HTMLInputElement;

let faltasBarça:number = 0;
let faltasMadrid:number = 0;

let goleadoresContador:HTMLInputElement = document.getElementById("green") as HTMLInputElement;
let minutosContador:HTMLInputElement = document.getElementById("blue") as HTMLInputElement;

let goleadores:string = "";
let minutos:number = 0;


//SUMAR T RESTAR GOOOOOOOOOLES

barçaImg.addEventListener("mousedown", (e) => {
    switch (e.button) {
        case 0: 
            golesBarça++;
            marcadorBarça.innerText = golesBarça.toString();
            break;

        case 2: 
            if(golesBarça != 0) golesBarça--;
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
            if(golesMadrid != 0) golesMadrid--;
            marcadorMadrid.innerText = golesMadrid.toString();
            break;
    }
});

barçaImg.addEventListener("mouseenter", function() {
    faltasBarça++;
    marcadorFaltasBarça.innerText = faltasBarça.toString();
});

madridImg.addEventListener("mouseleave", function() {
    faltasMadrid++;
    marcadorFaltasMadrid.innerText = faltasMadrid.toString();
});

document.body.addEventListener("keypress", function(e) {
    goleadores+=e.key.toString()
    goleadores.concat("concat")

    if(e.key != "0") {
        goleadoresContador.innerText = goleadores;
    }
    else {
        goleadoresContador.innerHTML = "";
        goleadores = "";
}
});

document.body.addEventListener("dblclick", function() {
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