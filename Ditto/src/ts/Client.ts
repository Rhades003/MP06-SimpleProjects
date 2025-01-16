import Persona from './Persona.js'
import Comanda from './Comanda.js'
import Identificable from './Identificable.js';

export default class Client extends Persona implements Identificable {
    public comandes: Comanda[];
    private _credit: number;
    public tipus:string = "Client";

    constructor(nom: string, cognoms: string, dni: string, credit: number) {
      super(nom, cognoms, dni);
      this._credit = credit;
      this.comandes = [];
    }
    get getId():string {
      return this.tipus;
    }
    get getCredit(): number {
      return this._credit;
    }

    set setCredit(credit: number) {
      this._credit = credit;
    }

    //Rep una comanda i la guarda a la llista de la instancia
    public afegirComanda(comanda: Comanda): void {
      this.comandes.push(comanda);
    }

    //Mostra les comandes de la instancia
    public mostrarComandes(): string {
      let resultat: string = "";

      this.comandes.forEach(comanda => {
        resultat += comanda.plats + "\n";
      });

      return resultat;
    }

    public mostrarInformacio() {
      console.log("Comandes: " + this.comandes.length);
    }
  }