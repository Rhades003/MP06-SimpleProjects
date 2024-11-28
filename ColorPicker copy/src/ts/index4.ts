/* declaro diners con ":" especificando que es tipo number y  introProduct tipo string en el momento de inicializar
las variables y asignarle el valor, tranformamos el contenido de los prompts(las respuestas de las preguntas que salen)
en el alert, usando parseFloat si es necesario y especificando que lo vamos a tratar como un string ya que el promp
es tipo any*/
let diners:number = parseFloat(prompt("Cuantos dineros tienes?") as string);
let introProduct:string = prompt("Quieres añadir un producto(Si/No)?") as string;

/*Declaramos las variables nameProduct, priceProduct, quantity y preguntaFinish con los ":" para 
epecificar su tipo y en este ultimo le asignamos el valor de No*/
let nameProduct:string;
let priceProduct:number;
let quantity:number;
let preguntaFinish:string = "No";

/*Hacemos un switch de introProduct el cual si has respondido anteriormente "Si" hace lo que pone en el primer case
si has respondido anteriormente "No" el programa finaliza enseñando un mensaje normal y si has respondido cualquier
otra cosa finaliza con un mensaje de error*/
switch(introProduct){
    case "Si":{
        /* En el caso de que hayas respondido que si haremos un do while que significa que tiene que hacer lo que haya
        en el do mientras no se cumpla la condicion del while*/
        do{
            /*Aquí agregamos el valor de las variables antes mencionadas con el prompt para hacer la pregunta como antes, 
            no hace falta especificar el tipo porque ya esta declarado en la propcia declaración de la variable*/
            nameProduct = prompt("Cuál es el nombre del producto?") as string;
            priceProduct = parseFloat(prompt("Cuál es el precio del producto?") as string);
            quantity = parseInt(prompt("Cuál es la cantidad que deseas?") as string);
            preguntaFinish =  prompt("El producto es correcto(Si/No en caso de que no se repetirá el proceso de preguntas)?") as string;
        }while(preguntaFinish != "Si");
        /* Cuando termine el do while comprobamos si lo que hemos gastado es mayor a lo que tenemos*/

        /*Si tu dinero es mayor o igual al gasto total haz esto:*/
        if(diners-(priceProduct*quantity) >=0){
            /*Hacemos los pertinenetes console.log para enseñar que se ha finalizado la compra con éxito y mostramos la información del producto y el dinero*/
            console.log("ORDE CONFIRMADA");
            console.log(nameProduct+" - "+priceProduct);
            console.log("Quantitat demanada - "+quantity);
            console.log("Total - "+(priceProduct*quantity));
            console.log("Diners restants - "+(diners-(priceProduct*quantity)));
        }
        /*si no cumple la condición anterior pues hacemos esto:*/
        else {
            /*Hacemos los pertinentes console.log para enseñar que no se ha finalizado la compra y mostramos la información del producto, del dinero y que no
            se ha podido hacer porque el importe supera nuestro dinero*/
            console.log("ORDE REBUTJADA");
            console.log(nameProduct+" - "+priceProduct);
            console.log("Quantitat demanada - "+quantity);
            console.log("Total - "+(priceProduct*quantity));
            console.log("L'import supera els diners que tens");
        }
        /*break para romper el case porque hemos terminado*/
        break;
    }
    /* En el caso de que hayas respondido que no se enviará un alert informando de que la orden esta finalizada porque no quieres ordenar un producto*/
    case "No":{
        /*Mostramos un alert para alertar al usuario*/
        alert("Orden Finalizada");
        /*break para romper el case porque hemos terminado*/
        break;
    }
    /* Con el default lo que hacemos es que cualquier opcion que no este entre las anteriores llegue a este "case" en nuetro caso cualquier cosa que no sea "Si/No"*/
    default: {
        /*Mostramos un alert para alertar al usuario*/
        alert("Error, respuesta no valida");
        /*break para romper el case porque hemos terminado*/
        break
    }
}