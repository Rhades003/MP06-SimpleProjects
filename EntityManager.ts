interface Identifiable {
    id: number;
}

interface Nameable {
    name: string;
}

function IdentifiableMixin<TBase extends new (...args: any[]) => {}>(Base: TBase) {
    return class extends Base implements Identifiable {
        id: number = 0; 
    };
}

function NameableMixin<TBase extends new (...args: any[]) => {}>(Base: TBase) {
    return class extends Base implements Nameable{
        name: string = "Unnamed"; 
    };
}

abstract class BaseEntity<T extends Identifiable & Nameable> {
    constructor(public entity: T) {}

    logProperty<K extends keyof T>(key: K): void {
        console.log(`The value of ${key.toString()} is:`, this.entity[key]);
    }
}

class BasicEntity{}

//TODO

 class ClaseDefinitivaInevitableLikeThanos extends IdentifiableMixin(NameableMixin(BasicEntity)) {

    
}

class ClaseDefinitivaInevitableLikeThanos2 extends BaseEntity<ClaseDefinitivaInevitableLikeThanos>{

}
let clase = new ClaseDefinitivaInevitableLikeThanos();
let clase2 = new ClaseDefinitivaInevitableLikeThanos2(clase);

    clase2.logProperty("id");