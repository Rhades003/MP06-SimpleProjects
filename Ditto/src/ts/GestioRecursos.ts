
export default class GestioRecursos <T>{


    arrayGenerica: T[] = [];
   
    afegirRecursos<TBase extends new (...args: any[]) => {}>(generic:T):void {
        this.arrayGenerica.push(generic);
    }

    mostrarRecursos():string {
        return "";

    }
}