"use strict";
/*Declaro max_view como const porque se que no va a cambiar su valor,
específico su tipo con ":" y termino con ";" para saber que he acabado,
también le asigno su valor porque no puedo declarar una cosntante sin valor*/
const max_view = 3;
/*Declaro num_view como var porque peta al tener la misma variable en distintos ficheros, si no lo hago
con var peta, específico su tipo con ":" y termino con ";" para saber que he acabado*/
var num_view = 0;
/*Declaro name_page como let porque con let ya me sirve para el uso que le voy a dar*/
let name_page;
/*He declarado welcome_msg como let, porque podría haberlo planteado de siempre imprimir
welcome_msg con el console.log e ir cambiado el contenido en los if-else, pero al final he
decidido ahorrar lineas imprimendo Error */
let welcome_msg = "Welcome, welcome";
/*Como resumen general del tema variables e inicio al do while, he declarado las variables arriba para evitar un
reset de valor de por ejemplo, num_view. Empiezo con el do y luego lo que quiero que haga que es lo mismo que en el ejercicio anterior solo que
en bucle ya que lo hará mientras se cumpla la condición del while que es la misma de antes*/
do {
    num_view++;
    if (num_view < max_view)
        console.log(welcome_msg);
    else
        console.log("Error");
} while (num_view < max_view);
