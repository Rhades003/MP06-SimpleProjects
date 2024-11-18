"use strict";
function carregarFrames() {
    let array = ["Final_Fantasy", "Super_Mario_Bros.", "Resident_Evil", "Halo:_Combat_Evolved"];
    let iframes = window.frames;
    for (let i = 0; i < iframes.length; i++) {
        iframes[i].location = "https://ca.wikipedia.org/wiki/" + array[i];
    }
}
