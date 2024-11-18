var header = document.getElementById("header");
var paragraph = document.getElementById("paragraph");
function carregarCookies() {
    var arrayCookies = document.cookie.split("; ");
    var nomCookie = "";
    var valorCookie = "";
    for (var _i = 0, arrayCookies_1 = arrayCookies; _i < arrayCookies_1.length; _i++) {
        var cookie = arrayCookies_1[_i];
        var temp = cookie.split("=");
        nomCookie = temp[0];
        valorCookie = temp[1];
        console.log("Nom de la cookie: ".concat(nomCookie, "; valor de la cookie: ").concat(valorCookie));
        if (nomCookie == "color") {
            switch (valorCookie) {
                case "rojo":
                    header.style.color = "red";
                    break;
                case "azul":
                    header.style.color = "azul";
                    break;
                case "verde":
                    header.style.color = "green";
                    break;
            }
        }
        else {
            switch (valorCookie) {
                case "catalan":
                    header.innerHTML = "Text en català";
                    header.innerHTML = "Per veure els canvis, actualitzar la pàgina. (Original)";
                    break;
                case "castellano":
                    header.innerHTML = "Para ver los canvios, actualizar la página. (Castellano)";
                    break;
                case "ingles":
                    header.innerHTML = "Text in english";
                    header.innerHTML = "To see the changes, reload the page. (English)";
                    break;
            }
        }
        ;
    }
}
function sendCookiesColor(key, value) {
    document.cookie = (key + ":" + value + ";");
}
