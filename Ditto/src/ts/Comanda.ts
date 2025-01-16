import Identificable from './Identificable.js';

//Definció comanda
export default class Comanda implements Identificable {
    public plats: string
    private _id: number
    public tipus: string = "Comanda";

    get getId():string {
      return this.tipus;
    }

    private static _nextId: number = 1;

    constructor(plats: string) {
      this.plats = plats;
      this._id = Comanda._nextId++;
    }

    set setId(id: number) {
      this._id = id;
    }

    get getIdAntiguo(): number {
      return this._id;
    }
  }