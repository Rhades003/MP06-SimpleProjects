let botones:HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

    for(let i = 0; i < botones.length; i++) botones[i].addEventListener("click", () => changeColor(botones[i].getAttribute("id")?.toString()!));

function changeColor(id:string){
    document.body.style.backgroundColor = id;     
}