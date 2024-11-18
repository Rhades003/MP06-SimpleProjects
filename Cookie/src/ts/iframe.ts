function carregarFrames() {
    let array = ["Final_Fantasy", "Super_Mario_Bros.", "Resident_Evil", "Halo:_Combat_Evolved"];
    let iframes:any = window.frames;

    for(let i:number = 0; i<iframes.length; i++){
        iframes[i].location = "https://ca.wikipedia.org/wiki/"+ array[i];
    }
}
