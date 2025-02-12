"use strict";
//
function diaDeLaSetmana() {
    //Pillamos el input especificando con ":" que es HTMLInputElement, lo pillamos gracias al DOM y lo obtenemos por el id y le decimos que lo trate como un HTMLInputElement con el "as"
    let input = document.getElementById("data");
    //Con otra variable string pillamos el value del input que es lo que interesa
    let inputValue = input.value;
    //Creamos la expresión regular "/^" para empezar, "\" siempre para escapar las cosas "d" de digits, "{}" para mirar cuantas veces se repite y "$/" para terminar
    //cerramos con ; para nosotros saber que hemos finaliado 
    let regexp = /^\d{2}\/\d{2}\/\d{4}$/;
    //Hacemos un if para el control de errores, no vaya a ser que intentemos hacer la fecha con un formato totalmente distinto, 
    //lo comprobamos con la expresion regular anteriormente creada
    console.log(regexp.test(inputValue));
    if (regexp.test(inputValue)) {
        //Creamos un nuevo objeto Date con el valor del input
        let fecha = new Date(inputValue.substring(6, 10), inputValue.substring(3, 5), inputValue.substring(0, 2));
        //Hacemos un alert con el numero de la semana que es gracias a que el metódo getDay() devuelve el dia de la semana de fecha nuestro objeto Date
        alert(fecha.getDay());
        //Hacemos un console.log con el Math.sqrt() para que printe por consola la raiz cuadrada de ese numero, y con el metodo .toFixed y especidicando el 2 lo redondeamos a 2 cifras
        console.log(Math.sqrt(fecha.getDay()).toFixed(2));
        //Si no hacemos otra cosa
    }
    else {
        //Alert avisando de que el formato es incorecto
        alert("Formato incorrecto");
    }
}
function modificarBom() {
    //Pillamos el input especificando con ":" que es HTMLInputElement, lo pillamos gracias al DOM y lo obtenemos por el id y le decimos que lo trate como un HTMLInputElement con el "as"
    let input = document.getElementById("nombre");
    //Con otra variable number pillamos el value del input que es lo que interesa con el "as unknown as number" para que podamos pasarlo a number
    let inputValue = (input.value);
    let color;
    let mensaje = document.createElement("h1");
    for (let i = 0; i < inputValue; i++) {
        color = Math.floor(Math.random() * 16777215).toString(16);
        //
        let mipestaña = window.open("", "", "width=300px, height=300px,backgroundColor=");
        mipestaña.document.write(i + "");
        mipestaña.document.body.style.backgroundColor = color;
    }
}
