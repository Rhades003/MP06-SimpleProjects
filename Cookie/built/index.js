"use strict";
function carregarCookies() {
    let header = document.getElementById("header");
    let paragraph = document.getElementById("paragraph");
    console.log(header);
    console.log(paragraph);
    console.log(localStorage.getItem("idioma"));
    console.log(localStorage.getItem("color"));
    switch (localStorage.getItem("color")) {
        case "red":
            document.body.style.backgroundColor = localStorage.getItem("color");
            break;
        case "blue":
            document.body.style.backgroundColor = localStorage.getItem("color");
            break;
        case "green":
            document.body.style.backgroundColor = localStorage.getItem("color");
            break;
    }
    switch (localStorage.getItem("idioma")) {
        case "catalan":
            header.innerHTML = "Text en català";
            paragraph.innerHTML = "Per veure els canvis, actualitzar la pàgina. (Original)";
            break;
        case "castellano":
            header.innerHTML = "Texto en castellano";
            paragraph.innerHTML = "Para ver los canvios, actualizar la página. (Castellano)";
            break;
        case "ingles":
            header.innerHTML = "Text in english";
            paragraph.innerHTML = "To see the changes, reload the page. (English)";
            break;
    }
}
;
