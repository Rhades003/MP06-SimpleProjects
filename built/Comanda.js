//Definció comanda
class Comanda {
    get getId() {
        return this.tipus;
    }
    constructor(plats) {
        this.tipus = "Comanda";
        this.plats = plats;
        this._id = Comanda._nextId++;
    }
    set setId(id) {
        this._id = id;
    }
    get getIdAntiguo() {
        return this._id;
    }
}
Comanda._nextId = 1;
export default Comanda;
//# sourceMappingURL=Comanda.js.map