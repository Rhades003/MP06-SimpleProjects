"use strict";
/*Declaro max_view como const porque se que no va a cambiar su valor,
específico su tipo con ":" y termino con ";" para saber que he acabado,
también le asigno su valor porque no puedo declarar una cosntante sin valor*/
//const max_view:number = 3;
/*Declaro num_view como var de cara al siguiente ejercicio ya que es la variable mas usada,
y se me puede liar, específico su tipo con ":" y termino con ";" para saber que he acabado*/
var num_view = 0;
/*Declaro name_page como let porque con let ya me sirve para el uso que le voy a dar*/
//let name_page:string;
/*He declarado welcome_msg como let, porque podría haberlo planteado de siempre imprimir
welcome_msg con el console.log e ir cambiado el contenido en los if-else, pero al final he
decidido ahorrar lineas imprimendo Error */
//let welcome_msg:string = "Welcome, welcome";
/*Incrementamos en 1 mi num_view*/
num_view++;
/*Con un grandioso if compruebo que num_view no sea mayor a num_max para poder
darle la bienvenida si el numero de visitas es menor al máximo de visitas, de lo
contrario printo Error*/
if (num_view < max_view)
    console.log(welcome_msg);
else
    console.log("Error");
/*Incrementamos en 1 mi num_view*/
num_view++;
/*Con un grandioso if compruebo que num_view no sea mayor a num_max para poder
darle la bienvenida si el numero de visitas es menor al máximo de visitas, de lo
contrario printo Error*/
if (num_view < max_view)
    console.log(welcome_msg);
else
    console.log("Error");
/*Incrementamos en 1 mi num_view*/
num_view++;
/*Con un grandioso if compruebo que num_view no sea mayor a num_max para poder
darle la bienvenida si el numero de visitas es menor al máximo de visitas, de lo
contrario printo Error*/
if (num_view < max_view)
    console.log(welcome_msg);
else
    console.log("Error");
