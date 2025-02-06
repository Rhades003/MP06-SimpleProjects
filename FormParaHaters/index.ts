let form:HTMLFormElement = document.getElementById("superForm") as HTMLFormElement;
let btnNumber:HTMLInputElement = document.getElementById("btnsubmit") as HTMLInputElement;



function stop(event:Event){
    let numero:number = btnNumber.value as unknown as number;

    if(numero%2==0 && numero!=0){
        event.preventDefault();
        window.history.back();
    }
    else {
        event.preventDefault();
        window.history.back();
    }
}

form.addEventListener("submit", stop);