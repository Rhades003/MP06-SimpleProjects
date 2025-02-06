"use strict";
let form = document.getElementById("superForm");
let btnNumber = document.getElementById("btnsubmit");
function stop(event) {
    let numero = btnNumber.value;
    if (numero % 2 == 0 && numero != 0) {
        event.preventDefault();
        window.history.back();
    }
    else {
        event.preventDefault();
        window.history.back();
    }
}
form.addEventListener("submit", stop);
//# sourceMappingURL=index.js.map