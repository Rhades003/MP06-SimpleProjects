"use strict";
let botones = document.getElementsByTagName("button");
for (let i = 0; i < botones.length; i++)
    botones[i].addEventListener("click", () => { var _a; return changeColor((_a = botones[i].getAttribute("id")) === null || _a === void 0 ? void 0 : _a.toString()); });
function changeColor(id) {
    document.body.style.backgroundColor = id;
}
